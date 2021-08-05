// going to need to hide some of the functionalities until sign in success, place those here
// require store so we can store user token for authentication
const store = require('./../store')

// on sign up success
const onSignUpSuccess = (response) => {
  $('#auth-message').text(`Thank you for signing up, ${response.user.email}, welcome!`)
  $('#sign-up').trigger('reset')
}

// on sign up failure
const onSignUpFailure = (error) => {
  $('#auth-message').text(`Sign up failed. make sure your email is formatted correctly and that your passwords match. Error Status: ${error.status}`)
  $('#sign-up').trigger('reset')
}

// on sign in success
const onSignInSuccess = (response) => {
  store.userToken = response.user.token
  $('#auth-message').text(`Welcome back, ${response.user.email}. Thank you for signing in.`)
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
}

// on sign in failure
const onSignInFailure = (error) => {
  $('#auth-message').text(`Sign in failed, please create an account and make sure your credentials are correct. Error status: ${error.status}`)
  $('#auth-message').trigger('reset')
}

// on sign out success
const onSignOutSuccess = () => {
  $('#auth-message').text('Come back soon!')
  $('#sign-up').show()
}

// on sign out failure
const onSignOutFailure = (error) => {
  $('#auth-message').text(`Error status: ${error.status}`)
}

// on change password success

// on change password failure

// post related stuff will go here when the time comes

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
