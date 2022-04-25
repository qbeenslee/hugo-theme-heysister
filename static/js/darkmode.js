/**
 * Author: qbeenslee
 * Date: 2021/04/26 20:03:40
 * Warning: Load script should in <header> node for fast load on dark mode.
 * */

var light = "light";
var dark = "dark";
var black = "black";
var HTML_KEY_DATA_MODE = "data-mode";
var LS_KEY_DARKMODE = "dark-mode";

function setElemAttribute(elem, attr, value) {
    if (value) {
        elem.setAttribute(attr, value);
    }
}

function getElemAttribute(elem, attr) {
    return elem.getAttribute(attr);
}

function getRootDataMode() {
    return getElemAttribute(document.documentElement, HTML_KEY_DATA_MODE);
}

function isBlackMode() {
    return getRootDataMode() === black;
}

function isDarkmodeActivated() {
    var isDarkmode = window.localStorage.getItem(LS_KEY_DARKMODE);
    if (isDarkmode === null) {
        var hours = new Date().getHours()
        isDarkmode = 6 >= hours || hours >= 20; // Auto set as darkmode when first time open website at night
        window.localStorage.setItem(LS_KEY_DARKMODE, isDarkmode);
    }
    return (isDarkmode + '') === 'true' || false;
}

function setDarkmodeLS(value) {
    window.localStorage.setItem(LS_KEY_DARKMODE, value);
}

function toggleDarkmodeLS() {
    var isDarkmode = this.isDarkmodeActivated();
    setDarkmodeLS(!isDarkmode);
}

function refreshAttrs() {
    var isDarkmode = this.isDarkmodeActivated();
    var mode = isBlackMode() ? black : (isDarkmode ? dark : light);
    if (!isBlackMode()) {
        setElemAttribute(document.documentElement, HTML_KEY_DATA_MODE, mode);
    }
    refreshContent(mode);
}

function refreshContent(mode) {
    var pageElement = document.getElementById('page');
    if (pageElement != null) {
        var contentElements = pageElement.getElementsByClassName('content');
        for (var i = 0; i < contentElements.length; ++i) {
            if (contentElements[i].classList.contains("fixed-data-mode")) {
                continue;
            }
            setElemAttribute(contentElements[i], HTML_KEY_DATA_MODE, mode);
        }
    }
}

function refreshUI(hideBlock) {
    // if(getRootDataMode()) return;
    var switcher = document.getElementById("darkmode-switcher");
    if (typeof(switcher) == 'undefined' || switcher == null) {
        return;
    }
    if (hideBlock) {
        switcher.display = "none";
        return;
    }
    if (isDarkmodeActivated()) {
        switcher.classList.remove('sun');
        switcher.classList.add('moon');
    } else {
        switcher.classList.remove('moon');
        switcher.classList.add('sun');
    }
}

function toggleDarkmode() {
    toggleDarkmodeLS();
    refresh();
}

function refresh() {
    refreshUI();
    refreshAttrs();
}

function firstRefresh() {
    var fixedMode = getRootDataMode();
    if (fixedMode === black || fixedMode === dark || fixedMode === light) {
        refreshUI(true);
        refreshContent(fixedMode);
    } else {
        refresh();
        document.addEventListener('DOMContentLoaded', function(event) {
            refresh();
        })
    }
}

firstRefresh();
