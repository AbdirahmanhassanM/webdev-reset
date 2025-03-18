const usernameEl = document.querySelector('#username')
const emailEl = document.querySelector('#email')
const passwordEl = document.querySelector('#password')

export function signUp (event) {
  event.preventDefault()
  const username = usernameEl.value
  const email = emailEl.value
  const password = passwordEl.value
  
  const data = {
    username,
    email,
    password,
  }

  fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    return res.text()
  }).then((text) => {
    console.log(text)
  }).catch(function (error) {
    console.log('Promise rejected with:', error)
  })
}