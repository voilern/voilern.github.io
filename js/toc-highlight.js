// TOC scroll highlight
(function() {
    'use strict';

    var toc = document.getElementById('toc-sidebar');
    if (!toc) return;

    var tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a'));
    if (!tocLinks.length) return;

    // 获取所有标题元素（兼容非 ASCII 的 href 编码）
    var headings = [];
    tocLinks.forEach(function(link) {
        var href = link.getAttribute('href') || '';
        if (!href || href.charAt(0) !== '#') return;

        var id = decodeURIComponent(href.substring(1));
        var heading = document.getElementById(id);
        if (heading) {
            headings.push({
                id: id,
                element: heading,
                link: link
            });
        }
    });

    if (headings.length === 0) return;

    function scrollToHeading(target) {
        if (!target || !target.element) return;
        var offset = 10;
        var top = target.element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        });
    }

    var tocWrapper = document.querySelector('.widget.toc-wrapper');
    var sidebar = document.getElementById('sidebar');
    var mediaQuery = window.matchMedia('(max-width: 48em)');
    var tocStartOffset = null;
    var tocRect = null;
    var tocFixed = false;
    var STICKY_TOP = 20;
    var TOGGLE_GAP = 0; // hysteresis to reduce flicker

    // 点击目录平滑滚动
    tocLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var href = link.getAttribute('href') || '';
            if (!href || href.charAt(0) !== '#') return;
            e.preventDefault();
            var id = decodeURIComponent(href.substring(1));
            var target = null;
            for (var i = 0; i < headings.length; i++) {
                if (headings[i].id === id) {
                    target = headings[i];
                    break;
                }
            }
            scrollToHeading(target);
        });
    });

    function updateTocOffset() {
        if (!tocWrapper) return;
        var rect = tocWrapper.getBoundingClientRect();
        tocStartOffset = rect.top + window.pageYOffset;
        tocRect = {
            width: rect.width,
            left: rect.left
        };
    }

    function updateActiveLink() {
        var scrollPos = window.scrollY || window.pageYOffset;

        // 找到当前最接近顶部的标题
        var current = null;
        for (var i = 0; i < headings.length; i++) {
            var heading = headings[i];
            var rect = heading.element.getBoundingClientRect();
            var offsetTop = rect.top + scrollPos;

            if (offsetTop <= scrollPos + 100) {
                current = heading;
            } else {
                break;
            }
        }

        tocLinks.forEach(function(link) {
            link.classList.remove('active');
        });

        if (current) {
            current.link.classList.add('active');

            var linkTop = current.link.offsetTop;
            var linkBottom = linkTop + current.link.offsetHeight;
            var viewTop = toc.scrollTop;
            var viewBottom = viewTop + toc.clientHeight;

            if (linkTop < viewTop) {
                toc.scrollTo({
                    top: linkTop - 10,
                    behavior: 'smooth'
                });
            } else if (linkBottom > viewBottom) {
                toc.scrollTo({
                    top: linkBottom - toc.clientHeight + 10,
                    behavior: 'smooth'
                });
            }
        }
    }

    // 保持目录栏悬停在视口
    function updateTocPosition() {
        if (!tocWrapper || !sidebar) return;

        if (mediaQuery.matches) {
            tocWrapper.classList.remove('toc-fixed');
            tocWrapper.style.removeProperty('--toc-fixed-width');
            tocWrapper.style.removeProperty('--toc-fixed-left');
            tocFixed = false;
            return;
        }

        if (tocStartOffset === null || tocRect === null) {
            updateTocOffset();
        }

        var fixThreshold = tocStartOffset - STICKY_TOP;
        var showThreshold = fixThreshold + TOGGLE_GAP;
        var hideThreshold = fixThreshold - TOGGLE_GAP;
        var shouldFix = window.pageYOffset >= showThreshold;
        var shouldRelease = window.pageYOffset <= hideThreshold;

        if (shouldFix && !tocFixed) {
            tocWrapper.classList.add('toc-fixed');
            if (tocRect) {
                tocWrapper.style.setProperty('--toc-fixed-width', tocRect.width + 'px');
                tocWrapper.style.setProperty('--toc-fixed-left', tocRect.left + 'px');
            }
            tocFixed = true;
        } else if (shouldRelease && tocFixed) {
            tocWrapper.classList.remove('toc-fixed');
            tocWrapper.style.removeProperty('--toc-fixed-width');
            tocWrapper.style.removeProperty('--toc-fixed-left');
            tocFixed = false;
        }
    }

    var throttleTimer = null;
    function throttledUpdate() {
        if (throttleTimer) return;
        throttleTimer = setTimeout(function() {
            updateActiveLink();
            updateTocPosition();
            throttleTimer = null;
        }, 100);
    }

    window.addEventListener('scroll', throttledUpdate);
    window.addEventListener('resize', function() {
        updateTocOffset();
        updateTocPosition();
    });
    mediaQuery.addEventListener('change', function() {
        updateTocOffset();
        updateTocPosition();
    });

    updateTocOffset();
    updateActiveLink();
    updateTocPosition();
})();
