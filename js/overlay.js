var _result
function renderOverlay() {
    var div = document.createElement('div');
    div.id="overlay";
    document.body.appendChild(div);

    var title = document.createElement('h1');
    title.innerHTML="WYGRAŁEŚ!"
    document.getElementById("overlay").append(title)

    var time = document.createElement('div')
    time.id="time"
    document.getElementById("overlay").append(time)


    var nick = document.createElement('h3')
    document.getElementById("overlay").append(nick)
    nick.innerHTML="PODAJ NICK:"

    var nick = document.createElement('input')
    nick.type = "text";
    nick.name = "nick";
    nick.id = "nick";
    nick.classList.add("input")
    document.getElementById("overlay").append(nick)

    var button = document.createElement('button');
    button.classList.add('btn','gradient');
    button.innerText="OK";
    button.onclick=function(){
        _result=_size+"-"+(document.getElementById('nick').value).toString()+"-"+_resultTime.toString()+"-"+_resultTimeMilliseconds;
        addToRegistry(_result);
        offOverlay();
    }
    document.getElementById("overlay").append(button)
}

function onOverlay() {
    var time = document.createElement('h3')
    time.innerHTML=_resultTime;
    document.getElementById("time").append(time)

    document.getElementById("overlay").style.display = "block";
    
}
function offOverlay() {
    document.getElementById("time").innerHTML="";
    document.getElementById("overlay").style.display = "none";
}
function getData(){
   
}