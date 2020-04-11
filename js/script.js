var doing = false;
var spin = [new Audio("./sounds/spin.mp3"), new Audio("./sounds/spin.mp3"), new Audio("./sounds/spin.mp3"), new Audio("./sounds/spin.mp3"), new Audio("./sounds/spin.mp3"), new Audio("./sounds/spin.mp3"), new Audio("./sounds/spin.mp3")];
var coin = [new Audio("./sounds/coin.mp3"), new Audio("./sounds/coin.mp3"), new Audio("./sounds/coin.mp3")]
var win = new Audio("./sounds/win.mp3");
var lose = new Audio("./sounds/lose.mp3");
var audio = false;
let status = document.getElementById("status")
var info = true;
var dol = 25;
var cash = document.getElementById('cash');




function doSlot() {
    if (doing) {
        return null
    }
    doing = true;
    var numChanges = randomInt(1, 4) * 7
    var numeberSlot1 = numChanges + randomInt(1, 7)
    console.log(numeberSlot1)
    var numeberSlot2 = numChanges + 2 * 7 + randomInt(1, 7)
    var numeberSlot3 = numChanges + 4 * 7 + randomInt(1, 7)
    var html = cash.innerHTML
    var f = html - dol
    cash.innerHTML = f
    console.log(f)

    var i1 = 0;
    var i2 = 0;
    var i3 = 0;
    var sound = 0
    status.innerHTML = "SPINNING"
    slot1 = setInterval(spin1, 10);
    slot2 = setInterval(spin2, 10);
    slot3 = setInterval(spin3, 10);

    function spin1() {
        var g = 1;
        let f = 2;
        const h = 3;
        i1++;
        if (i1 >= numeberSlot1) {
            coin[0].play()
            clearInterval(slot1);
            return null;
        }
        slotTile = document.getElementById("slot1");
        if (slotTile.className == "a7") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }
    console.log(f)

    function spin2() {
        i2++;
        if (i2 >= numeberSlot2) {
            coin[1].play()
            clearInterval(slot2);
            return null;
        }
        slotTile = document.getElementById("slot2");
        if (slotTile.className == "a7") {
            slotTile.className = "a0";
        }
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }

    function spin3() {
        i3++;
        if (i3 >= numeberSlot3) {
            coin[2].play()
            clearInterval(slot3);
            testWin();
            return null;
        }
        slotTile = document.getElementById("slot3");
        if (slotTile.className == "a7") {
            slotTile.className = "a0";
        }
        sound++;
        if (sound == spin.length) {
            sound = 0;
        }
        spin[sound].play();
        slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
    }
}
toCash()

function toCash() {
    var cashs = document.getElementsByClassName('lbl');
    var g = document.getElementById('cashsI')

    for (var i = 0; i <= cashs.length; i++) {
        console.log(cashs[i])

        cashs[i].onclick = function () {
            // g.innerHTML = cashs[i]
            console.log(cashs[i])

        }

    }
}

function testWin() {
    let slot1 = document.getElementById("slot1").className
    var slot2 = document.getElementById("slot2").className
    var slot3 = document.getElementById("slot3").className

    if (((slot1 == slot2 && slot2 == slot3) ||
            (slot1 == slot2 && slot3 == "a7") ||
            (slot1 == slot3 && slot2 == "a7") ||
            (slot2 == slot3 && slot1 == "a7") ||
            (slot1 == slot2 && slot1 == "a7") ||
            (slot1 == slot3 && slot1 == "a7") ||
            (slot2 == slot3 && slot2 == "a7")) && !(slot1 == slot2 && slot2 == slot3 && slot1 == "a7")) {

        var html1 = cash.innerHTML
        var f = html1 + 1
        cash.innerHTML = f
        status.innerHTML = "YOU WIN!";



        win.play();
    } else {
        status.innerHTML = "YOU LOSE!"
        lose.play();
    }
    doing = false;
}

function randomInt(min, max) {
    return Math.floor((Math.random() * 10) + min);
}