let count = 0
home = document.getElementById('home')

function addOneHome(){
    count += 1
    home.innerText = count
}

function addTwoHome(){
    count += 2
    home.innerText = count
}

function addThreeHome(){
    count += 3
    home.innerText = count
}

guest = document.getElementById('guest')

function addOneGuest(){
    count += 1
    guest.innerText = count
}

function addTwoGuest(){
    count += 2
    guest.innerText = count
}

function addThreeGuest(){
    count += 3
    guest.innerText = count
}

function reset(){
    count = 0
    document.getElementById('guest').innerText = count
    document.getElementById('home').innerText = count
}