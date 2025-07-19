document.getElementById('survey-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = {
        visitDate: document.getElementById('visit-date').value,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        siteLocation: document.getElementById('site-location').value,
        siteContact: document.getElementById('site-contact-person').value,
        areaName: document.getElementById('area-name').value,
        floors: document.getElementById('number').value,
        areaSize: document.getElementById('area-size').value,
        totalCCTV: document.getElementById('total-cctv').value,
        cctvLocation: document.getElementById('cctv-location').value,
        objective: document.getElementById('objective').value,
        height: document.getElementById('height').value,
        distance: document.getElementById('distance').value,
        cctvType: document.getElementById('dropdown').value,
        notes: document.getElementById('notes').value
    };

    fetch('https://script.google.com/macros/s/AKfycbzM1rgZ66rr2wEbOijd9SyxDaVtxkx1pZY5SrbsyPnAflifsmJr-JmnrdEPMICpcMwkKA/exec', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(() => {
        alert('Data berhasil dikirim!');
        document.getElementById('survey-form').reset();
    })
    .catch(error => {
        alert('Gagal mengirim data: ' + error);
    });
});
