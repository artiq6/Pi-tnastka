//Tablica z adresami obrazków
    var images = [
        "<img src='images\\c0.gif' alt='c0'>", //0
        "<img src='images\\c1.gif' alt='c1'>", //1
        "<img src='images\\c2.gif' alt='c2'>", //2
        "<img src='images\\c3.gif' alt='c3'>", //3
        "<img src='images\\c4.gif' alt='c4'>", //4
        "<img src='images\\c5.gif' alt='c5'>", //5
        "<img src='images\\c6.gif' alt='c6'>", //6
        "<img src='images\\c7.gif' alt='c7'>", //7
        "<img src='images\\c8.gif' alt='c8'>", //8
        "<img src='images\\c9.gif' alt='c9'>", //9
        "<img src='images\\dot.gif' alt='dot'>", //10 (kropka)
        "<img src='images\\colon.gif' alt='colon'>" //11 (dwukropek)
    ]
    //czas przed, interwał czasowy, czas jaki minął
    var beforeTime, stopwatchInterval, elapsedTime = 0;
    var _resultTime;

    var updateTime = function () {
        var time = elapsedTime;
        var milliseconds = time % 1000;
        time = Math.floor(time / 1000);
        var seconds = time % 60;
        time = Math.floor(time / 60);
        var minutes = time % 60;
        time = Math.floor(time / 60);
        var hours = time % 60;

        var tmp = document.getElementsByClassName('timer')[0];
        tmp.innerHTML = (hours ? (hours > 9 ? images[Math.floor(hours / 10)] + images[Math.floor(hours % 10)] : images[0] + images[hours]) : images[0] + images[0]) + images[11]
            + (minutes ? (minutes > 9 ? images[Math.floor(minutes / 10)] + images[Math.floor(minutes % 10)] : images[0] + images[minutes]) : images[0] + images[0]) + images[11]
            + (seconds ? (seconds > 9 ? images[Math.floor(seconds / 10)] + images[Math.floor(seconds % 10)] : images[0] + images[seconds]) : images[0] + images[0]) + images[10]
            + (milliseconds < 999 ? (milliseconds > 99 ? images[Math.floor(milliseconds / 100)] + images[Math.floor((milliseconds / 10) % 10)] + images[Math.floor(milliseconds % 10)] : (milliseconds > 9 ? images[0] + images[Math.floor(milliseconds / 10)] + images[Math.floor(milliseconds % 10)] : images[0] + images[0] + images[milliseconds])) : images[0] + images[0] + images[0]);
    };

    function startTimer() {
        if (!stopwatchInterval) {
            stopwatchInterval = setInterval(function () {
                if (!beforeTime) {
                    beforeTime = Date.now();
                }
                elapsedTime += Date.now() - beforeTime;
                beforeTime = Date.now();
                updateTime();
            }, 50);
        }
    }

    function pauseTimer() {
        time=elapsedTime;
        var milliseconds = time % 1000;
        time = Math.floor(time / 1000);
        var seconds = time % 60;
        time = Math.floor(time / 60);
        var minutes = time % 60;
        time = Math.floor(time / 60);
        var hours = time % 60;
        _resultTime=hours+":"+minutes+":"+seconds+"."+milliseconds;
        _resultTimeMilliseconds=elapsedTime;
       console.log(_resultTime)
       console.log(elapsedTime)
        if (stopwatchInterval) {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
        }
        beforeTime = null;
    }

    function restartTimer() {
        if (stopwatchInterval) {
            clearInterval(stopwatchInterval);
            stopwatchInterval = null;
        }
        beforeTime = null;
        elapsedTime = 0;
        updateTime();
    }
    //start.onclick = startTimer;
    //pause.onclick =restartTimer;
