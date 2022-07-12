$(document).ready(function() {
    $("main").find("img").not(".image-compare-item").lazyload();

    $('#content-toc-tree a[href*="#"]').click(function(event) {
        event.preventDefault();
        $.smoothScroll({
            offset: -60,
            scrollTarget: decodeURI(this.hash),
            speed: 500,
        });
    });

    $('#banner a[href*="#"]').click(function(event) {
        event.preventDefault();
        $.smoothScroll({
            offset: 0,
            scrollTarget: decodeURI(this.hash),
            speed: 500,
        });
    });
    if (-1 !== $("meta[property='config']").attr("content").trim().indexOf("protectImage")) {
        var imgs = $("img");
        imgs.on("contextmenu", function() {
            return !1;
        });
        imgs.on("dragstart", function() {
            return !1;
        });
    }
});

/***
 *  Auto header
 */
$(document).ready(function() {
    var banner = $("#banner");
    var delta,
        nav_bar_height,
        scrolled,
        lastScrollTop = 0;

    /*
    修改下拉框的显示/隐藏
    */
    var toggle_dropdown_menu = function(menu) {
        var menuDisplay = menu.css("display");
        if (menuDisplay === "block") {
            menu.css("display", "none");
            $(".dropdown-content").on("mouseleave", null);
        } else {
            menu.css("display", "block");
            $(".dropdown-content").on("mouseleave", function() {
                $(".dropdown-content").css("display", "none");
            });
        }
    };

    $(".dropdown-content")
        .parent()
        .click(function() {
            toggle_dropdown_menu($(this).find(".dropdown-content"));
        });
    /**
    修改导航栏样式
    */
    var toggle_header_style = function() {
        if (banner && typeof banner != "undefined" && banner.height() > 0) {
            var scrollY = $(this).scrollTop();
            if (scrollY <= banner.height()) {
                $("#header").removeClass("nav-opaque").addClass("nav-trans");
            } else {
                $("#header").removeClass("nav-trans").addClass("nav-opaque");
            }
        }
    };

    /**
    修改导航栏的可见状态
    */
    var toggle_header_visiable = function() {
        var st;
        st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) {
            return false;
        }
        if (st > lastScrollTop && st > nav_bar_height / 2) {
            $(".auto_header").css("top", "-" + nav_bar_height * 1.2 + "px");
        } else {
            if (st + $(window).height() < $(document).height()) {
                $(".auto_header").css("top", "0");
            }
        }
        return (lastScrollTop = st);
    };

    /**
    修改TOC导航栏可见状态
    */
    var toggle_toc_visiable = function() {
        if (banner && typeof banner != "undefined" && banner.height() > 0) {
            var windowWidth = $(window).width();
            if (windowWidth < 1350) {
                return;
            }
            var scroll_Y = $(this).scrollTop();
            if (scroll_Y <= banner.height()) {
                $("#content-toc-box").hide();
            } else {
                $("#content-toc-box").show();
            }
        }
    };

    if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
        var timeout = setTimeout(function() {
            scrolled = false;
            delta = 10; /*垂直位移触发量*/
            nav_bar_height = $(".auto_header").outerHeight();
            $(document).ready(function() {
                $("body").css("position", "relative");
                return $(".auto_header").css("transition", "top 0.3s ease-in-out").css("top", "0").css("position", "fixed").css("z-index", 1100);
            });
            $(window).scroll(function() {
                toggle_header_style();
                return (scrolled = true);
            });
            setInterval(
                (function(_this) {
                    return function() {
                        if (scrolled) {
                            toggle_header_visiable();
                            toggle_toc_visiable();
                            return (scrolled = false);
                        }
                    };
                })(this),
                250
            );
        }, 1200);

        toggle_header_style();
    }
});

/*
Put this file in /static/js/load-photoswipe.js
Documentation and licence at https://github.com/liwenyip/hugo-easy-gallery/
*/

/* Show an alert if this js file has been loaded twice */
if (window.loadphotoswipejs) {
    window.alert("You've loaded load-photoswipe.js twice. See https://github.com/liwenyip/hugo-easy-gallery/issues/6");
}
var loadphotoswipejs = 1;

$(document).ready(function() {
    if(typeof window.mediumZoom === undefined || typeof window.mediumZoom === "undefined"){
        return true;
    }
    var zoom = mediumZoom();
    zoom.update({ background: '#000C',margin:45})

    var attachHolder = function() {
        // get properties from child a/img/figcaption elements,
        var $img = $(this);
        // ignore any figures where class="no-photoswipe" or "nozoom"
        if (
            $img.hasClass("no-photoswipe") ||
            $img.hasClass("nozoom") ||
            !$img.parent().is("figure") ||
            // Skip special image view framework almost
            ($img.parent().is("div") && !$img.parent().hasClass("content")) ||
            $img.parent().is("a")
        ) {
            if ($img.parent().is("a")) {
                $img.css("cursor", "pointer");
            } else {
                $img.css("cursor", "default");
            }
            return true;
        }
        var $src = $img.attr("href"),
            $title = $img.attr("alt"),
            $msrc = $img.attr("src"),
            $dataOriginal = $img.attr("data-original");

        $(this).css("cursor", "zoom-in");
        if (($msrc == undefined || $msrc.startsWith("data:")) && $dataOriginal != undefined) {
            $msrc = $dataOriginal;
        }
        if ($src == undefined) {
            $src = $msrc;
        }
        zoom.attach(this);
    };
    // for every figure element on the page:
    $("#content img").each(attachHolder);
});

/**
 * plugin: search
 * */
// searching box
var searchVisible = !1;
var searchDataLoad = !1;
var searchScriptLoad = !1;

function loadScript(callback) {
    callback = $.isFunction(callback) ? callback : function() {};
    if (searchScriptLoad) {
        callback();
        return;
    }
    var script_url = document.location.origin + "/js/semantic-search.js";
    $.ajaxSetup({
        cache: true
    });
    $.getScript(script_url)
        .done(function(script, textStatus) {
            searchScriptLoad = 1;
            callback();
        })
        .fail(function(jqxhr, settings, exception) {
            console.log("Loading semantic-search.js failed.");
        });
}

function toggleSearch() {
    searchVisible ? $(".search-box").css("display", "") :
        ($(".search-box").css("display", "block"),
            setTimeout(function() {
                return $(".search-box input").focus();
            })), (searchVisible = !searchVisible);

    if (!searchDataLoad) {
        searchDataLoad = 1;
        var source_url = document.location.origin + "/index.json";
        loadScript(function() {
            $.getJSON(source_url, function(data) {
                $(".search-box").search({
                    source: data,
                    searchFields: ["title", "description", "tip", "date", "tags", "categories", "url"],
                    onResultsOpen: function(_this) {
                        setTimeout(function() {
                            $(".search-box").find("img").lazyload();
                        }, 220);
                    },
                });
            });
        });
    }
}

$(document).ready(function() {
    $(document).on("keydown", function(e) {
        e.metaKey && "/" === e.key && !searchVisible && toggleSearch(), "Escape" === e.key && searchVisible && toggleSearch();
    });
});



/**
 *
 * Capture page, save as image
 * */
function capturePage() {
    var t = document.querySelector("#save-article-as-img"),
        e = window.getComputedStyle(t),
        a = $("#save-article-as-img .page"),
        n = $(":first-child", a).prop("offsetWidth") + e.paddingLeft + e.paddingRight,
        o = 0,
        i = (o = a.each(function() {
            $(this).prop("offsetHeight")
        }), document.createElement("canvas"));
    return i.width = 2 * n, i.height = 2 * o, i.getContext("2d").scale(2, 2), html2canvas(document.querySelector("#save-article-as-img"), {
        canvas: i,
        width: n,
        height: o,
        scale: 2,
        useCORS: true // 第三步添加的地方
    }).then(function(t) {
        var e = t.getContext("2d");
        e.mozImageSmoothingEnabled = !1, e.webkitImageSmoothingEnabled = !1, e.msImageSmoothingEnabled = !1, e.imageSmoothingEnabled = !1;
        var a = t.toDataURL("image/png"),
            n = document.createElement("a");
        n.href = URL.createObjectURL(dataURLtoBlob(a)), n.download = "".concat(document.title.split("|").map(function(t) {
            return t.trim()
        }).join("-"), ".png"), n.click()
    }), !1
}

function dataURLtoBlob(t) {
    for (var e = t.split(","), a = e[0].match(/:(.*?);/)[1], n = atob(e[1]), o = n.length, i = new Uint8Array(o); o--;) i[o] = n.charCodeAt(o);
    return new Blob([i], {
        type: a
    })
}

// Mermaid

var initMermaid = function() {
    for (var r = ".language-mermaid", i = document.querySelectorAll(r), o = 0; o < i.length; o++) {
        var a = i[o], f = a.innerText || a.textContent;
        var d = document.createElement("div");
        d.innerHTML = '<div class="mermaid">' + f + '</div>';
        a = a.parentElement;
        a.parentNode.insertBefore(d, a.nextSibling);
        a.parentElement.removeChild(a);
    }
};
document.addEventListener("DOMContentLoaded", function(e) {
    initMermaid()
})
