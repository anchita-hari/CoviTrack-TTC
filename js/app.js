/* function test() {
    var pills = document.getElementsByClassName("badge-pill");

    var x = document.getElementById("status").value;
    if (x == "verified") {
        for (var i = 0; i < pills.length; i++) {
            if (x !== pills[i].value) {
                var section = document.getElementsByTagName("section");
                var divs = section.getElementsByTagName("div");
            }
        }
    }
} */

function changePage() {
    var val = document.getElementById("status").value;
    if (val == "Verified") {
        location.href = "verified.html";
    }
    else if (val == "Self-Reported") {
        location.href = "self_report.html"
    }
}

function toHome() {
    location.href = "index.html";
}