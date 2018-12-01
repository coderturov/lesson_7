
 setInterval (sec, 1000);
 function sec() {
    Data = new Date();
    Hour = Data.getHours();
    Minutes = Data.getMinutes();
    Seconds = Data.getSeconds();
    var clock = document.getElementById("clock");
    if (Hour < 10) Hour = "0" + Hours;
    if (Minutes < 10) Minutes = "0" + Minutes;
    if (Seconds < 10) Seconds = "0" + Seconds;
	clock.innerHTML = +Hour+":"+Minutes+":"+Seconds;
}
