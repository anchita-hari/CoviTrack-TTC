function changePage() {
    var val = document.getElementById('status').value;
    if (val == 'Verified') {
        location.href = 'verified.html';
    }
    else if (val == 'Self-Reported') {
        location.href = 'self_report.html';
    }
}

function toHome() {
    location.href = 'index.html';
}

function toCodes() {
    location.href = 'scan_results.html';
}

function submitForm() {
    alert('The case has been submitted. Thank you!'); 
}