let codename = document.getElementById('codename')
let email = document.querySelector('#email')
let nameField = false
let emailField = false

codename.style.width = '100%'
email.style.width = '100%'

function validateWhatever() {
    let valName = document.querySelector('#valName')
    if (codename.value.length < 3) {
        valName.innerHTML = '> 3 characters...'
        valName.style.color = 'red'
    } else {
        valName.innerHTML = ''
        nameField = true
    }
}

function validateSomeOtherMeaninglessShit() {
    let valEmail = document.querySelector('#valEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        valEmail.innerHTML = 'You got it wrong, bro'
        valEmail.style.color = 'red'
    } else {
        valEmail.innerHTML = ''
        emailField = true
    }
}

function spitSomeFactsYo() {
    if (nameField & emailField) {
        alert('Done, dude.')
    } else {
        alert("Whatever, man." )
    }
}