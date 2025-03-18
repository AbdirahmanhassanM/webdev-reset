import { signUp } from './src/signup.js'


const signupEl = document.querySelector('#singup')
const signinFormEl = document.querySelector('#signin')
const usernameEl = document.querySelector('#Username')
const emailEl = document.querySelector('#Email')
const passwordEl = document.querySelector('#Password')

function signup(event) {
    event.preventDefault()
    console.log(usernameEl.value)

    const username = usernameEl.value
    const email = emailEl.value
    const password = passwordEl.value

    const data = {
        username, 
        email,
        password,
    }

    fetch('/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((res) => {
        return res.text()
    }).then ((text) => {
        console.log(text)
    }).catch(function (error) {
        console.log('Promise rejected with: ', error)
    })
}
function signin(event) {
    event.preventDefault()
    console.log(usernameEl.value)

    const username = usernameEl.value
    const email = emailEl.value
    const password = passwordEl.value

    const data = {
        username, 
        email,
        password,
    }

    fetch('/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then((res) => {
        return res.text()
    }).then ((text) => {
        console.log(text)
    }).catch(function (error) {
        console.log('Promise rejected with: ', error)
    })
}
if (signUpFormEl) {
    signinFormEl.addEventListener('submit', signup)
}

if (signinFormEl) {
    signinFormEl.addEventListener('submit', signin)
}

