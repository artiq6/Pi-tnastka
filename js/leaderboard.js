var nr = localStorage['nr'];
if (nr == undefined) {
    nr = 0;
    localStorage.setItem('nr', nr);
}
else {
    nr = localStorage['nr'];
}
//result wcześniej przygotowany w overlay.js
function addToRegistry(result) {
    nr++
    localStorage.setItem('nr', nr);
    localStorage.setItem('result' + nr, result);
}
//console.log(localStorage.getItem('myElement')); //Przykładowa wartość

function clearRegistry() {
    if (confirm('Czy chcesz wyczyścić zapisane dane?')) {
        localStorage.clear()
    }
}
function soruj() {
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage['result' + i].split("-")[0] == 3) {
            console.log((localStorage['result' + i].split("-")[1]))
            console.log((localStorage['result' + i].split("-")[2]))
        }
    }
}
function renderLeaderboard() {
    var div = document.createElement('div');
    div.id = "leaderboard";
    document.body.appendChild(div);

    var title = document.createElement('h1');
    title.innerHTML = "Ranking"
    document.getElementById("leaderboard").append(title)

    var div = document.createElement('div');
    div.classList.add("buttonsLeader");
    document.getElementById('leaderboard').append(div);

    for (var i = 0; i < 4; i++) {
        var playgroundSize = i + 3;
        var button = document.createElement('button');
        button.classList.add('btn', 'gradient');
        button.innerHTML = playgroundSize + "x" + playgroundSize;
        var div = document.getElementsByClassName('buttonsLeader')[0];
        div.appendChild(button)
        button.onclick = function () {
            var tmpsize = parseInt(this.innerHTML.charAt(0))
            rankingLeaderboard(tmpsize)
        }
    }
    var div = document.createElement('div');
    div.onclick = function () {
        offLeaderboard();
    }
    div.classList.add('btn', 'trophy', 'gradient');
    div.innerHTML = '<i class="fas fa-times"></i>'
    div.style.position = "absolute"
    div.style.right = "0"
    div.style.margin = "0"
    document.getElementsByClassName('buttonsLeader')[0].prepend(div);



    var table = document.createElement('table');
    table.id = "leaderboardTable"
    document.getElementById("leaderboard").append(table)

}

function onLeaderboard() {
    document.getElementById("leaderboard").style.display = "block";

}
function offLeaderboard() {
    document.getElementById("leaderboard").style.display = "none";
}

function rankingLeaderboard(size) {
    document.getElementsByTagName("h1")[1].innerHTML = "<h1>Ranking <b>" + size + "x" + size + "</b></h1>"
    //czyszczenie tabeli
    document.getElementById("leaderboardTable").innerHTML = "";
    var sizeRecords = []
    //sortowanie po wielkości (3x3 itp)
    for (var i = 1; i < localStorage.length; i++) {
        var tmp = localStorage['result' + i].split('-');
        if (tmp[0] == size) {
            var record = { nick: tmp[1], time: tmp[2], result: tmp[3] }
            sizeRecords.push(record)
        }
    }
    //sortiowanie po czasie
    function compare(a, b) {
        var at=a.result
        var bt=b.result
        if (at < bt)
            return -1;
        if (at > bt)
            return 1;
        return 0;
    }
    sizeRecords.sort(compare);
    console.log(sizeRecords)

    var tr = document.createElement('tr');
    document.getElementById("leaderboardTable").append(tr)

    var th = document.createElement('th');
    th.innerHTML = "Miejsce"
    document.getElementsByTagName("tr")[0].append(th)

    var th = document.createElement('th');
    th.innerHTML = "Nick"
    document.getElementsByTagName("tr")[0].append(th)

    var th = document.createElement('th');
    th.innerHTML = "Czas"
    document.getElementsByTagName("tr")[0].append(th)

    for (var i = 1; i < sizeRecords.length + 1 && i < 11; i++) {
        var tr = document.createElement('tr');
        document.getElementById("leaderboardTable").append(tr)
        //miejsce
        var result = document.createElement('td');
        result.innerHTML = i;
        document.getElementsByTagName("tr")[i].append(result)
        //nick
        var result = document.createElement('td');
        result.innerHTML = sizeRecords[i - 1].nick;
        document.getElementsByTagName("tr")[i].append(result)
        //czas
        var result = document.createElement('td');
        result.innerHTML = sizeRecords[i - 1].time;
        document.getElementsByTagName("tr")[i].append(result)
    }
}


