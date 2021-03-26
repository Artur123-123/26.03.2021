function formularz() {
    const imie = document.getElementById('imie').value
    console.log(imie)
}

function formularz2() {
    const naz = document.getElementById('nazwisko').value
    console.log(naz)
}

function formularz3() {
    const mail = document.getElementById('email').value 
        console.log(mail)
}

function formularz4() {
    const tel = document.getElementById('telefon').value
    console.log(tel)
}

function formularz5() {
    const mess = document.getElementById('mess').value
    console.log(mess)
}

function onchange1() {
    const imie = document.getElementById('imie').value
    console.log(imie)
}

function onchange2() {
    const naz = document.getElementById('nazwisko').value
    console.log(naz)
}

function onchange3() {
    const mail = document.getElementById('email').value
    console.log(mail)
}

function onchange4() {
    const tel = document.getElementById('telefon').value
    console.log(tel)
}

function onchange5() {
    const mess = document.getElementById('mess').value
    console.log(mess)
}

function walidacja() {
    const imie = document.getElementById('imie').value
    if(imie.length < 3) {
        alert ("Za krótkie imię")
    }
}

function walidacjaNaz() {
    const naz = document.getElementById('nazwisko').value
    if(naz.length < 5) {
        alert ("Za krótkie nazwisko")
    }
}

function walidacjaWiad() {
    const mess = document.getElementById('mess').value
    if(mess.length < 20) {
        alert ("Za krótka wiadomość")
    }
}

// function walidacjaMail(mail) {
//     let split1 = mail.split('')
//     console.log(split1)
//     split1.some(item => item === '@')
// }

function telefon() {
    const tele = document.getElementById('telefon').value
    if(tele !== Number) {
        alert ('Tylko cyfry')
    }
}

// function email() {
//     const mail = document.getElementsByName('email').value

// }

function fon(val) {
    const arr = val.split('')
    const num = arr.filter(item => {
        if(item === '1' || item === '2' || item === '3' || item === '4' || item === '5' || item === '6' || item === '7' || item === '8' || item === '9') {
            return item
        } else {
             alert("Tylko cyfry ${item}")
             return
         }
    })
    console.log(num)
    // const isNum = Number(telefon)
    // const num = parseFloat(telefon)
    // console.log(num)
}