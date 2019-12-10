var cookieNr = 0;
function setCookie(resault) {
    var d = new Date();
    d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); //wygasanie na 7 dni
    var expires = "expires=" + d.toUTCString();
    document.cookie = "resault" + cookieNr + "=" + resault + ";" + expires + ";path=/";
    cookieNr++;
}
