export function singin(evnt) {
    
}
const formEl = document.querySelector('form')
const usernameEl = document.querySelector('#Username')
const passwordEl = document.querySelector('#Password')

function onsubmit(event) {
    event.preventDefault()
    console.log(usernameEl.value)

    const username = usernameEl.value
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

formEl.addEventListener('submit', onsubmit)