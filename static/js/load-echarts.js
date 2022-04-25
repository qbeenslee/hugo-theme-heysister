function drawECharts(eleIID, txt) {
    var ele = document.getElementById(eleIID);
    try {
        eval(txt);
        var myoption = option;
        myoption.animation = !1, void 0 !== myoption.width ? ele.style.width = myoption.width + 10 + "px" : ele.style.width = "100%", void 0 !== myoption.height ? ele.style.height = myoption.height + 10 + "px" : ele.style.height = "350px";
        var myChart = echarts.init(ele);
        myChart.setOption(myoption)
    } catch (e) {}
}

function insertAfter(e, n) {
    e.parentNode.insertBefore(n, e.nextSibling)
}
var init = function() {
    var e = [
        [".language-echarts", drawECharts]
    ];
    var glNumber = 0;
    var chartEleId = "chart-ele-";

    for (var n = 0; n < e.length; n++)
        for (var r = e[n][0], t = e[n][1], i = document.querySelectorAll(r), o = 0; o < i.length; o++) {
            var a = i[o],
                f = a.innerText || a.textContent;
            a = a.parentElement;
            var d = document.createElement("div"),
                l = chartEleId + glNumber;
            glNumber++, d.innerHTML = '<div id="' + l + '"></div>', insertAfter(a, d), a.parentElement.removeChild(a), t(l, f)
        }
};
document.addEventListener("DOMContentLoaded", function(e) {
    init()
})
