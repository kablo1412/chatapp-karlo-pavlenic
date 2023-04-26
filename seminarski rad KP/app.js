
function trenutnoVrijeme() {

    let upravoSad= new Date();


    let satovi = document.querySelectorAll('.vrijeme');
    for (let i = 0; i < satovi.length; i++) {
        let sati = upravoSad.getHours();
        let minute = upravoSad.getMinutes();
   
    if (sati < 10) {
        sati = "0" + sati;
    }

    if (minute < 10) {
        minute = "0" + minute;
    }
    satovi[i].textContent = sati + ':' + minute;
    }

}
setInterval(trenutnoVrijeme, 1000);
