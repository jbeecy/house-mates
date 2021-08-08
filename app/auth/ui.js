// going to need to hide some of the functionalities until sign in success, place those here
// require store so we can store user token for authentication
const store = require('./../store')
$('#sign-out').hide()
$('#change-password').hide()
$('#forum').hide()
$('#index-posts').hide()

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
  console.log(store.userToken)
  $('#auth-message').text(`Welcome back, ${response.user.email}. Thank you for signing in.`)
  $('#sign-in').trigger('reset')
  $('#sign-up').hide()
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#forum').show()
  $('#index-posts').show()
}

// on sign in failure
const onSignInFailure = (error) => {
  $('#auth-message').text(`Sign in failed, please create an account and make sure your credentials are correct. Error status: ${error.status}`)
  $('#sign-in').trigger('reset')
}

// on sign out success
const onSignOutSuccess = () => {
  $('#auth-message').text('Come back soon!')
  $('#sign-up').show()
  $('#sign-in').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#forum').hide()
  $('#index-posts').hide()
}

// on sign out failure
const onSignOutFailure = (error) => {
  $('#auth-message').text(`Error status: ${error.status}`)
}

// on change password success
const onChangePasswordSuccess = () => {
  console.log('change password success:')
  $('#auth-message').text('Congrats, password changed successfully')
  $('#change-password').trigger('reset')
}

// on change password failure
const onChangePasswordFailure = (error) => {
  $('#auth-message').text(`Error changing password. Error Status: ${error.status}`)
  $('#change-password').trigger('reset')
}

// post related stuff will go here when the time comes

// on create post success
const onCreatePostSuccess = (response) => {
  store.postId = response.body.id
  $('#auth-message').text(`Post created with post ID ${response.body.id}, keep this if you want to update or delete your post.`)
  $('#create-post').trigger('reset')
}

// on create post failure
const onCreatePostFailure = () => {
  $('#auth-message').text('There was an error creating the post.')
  $('#create-post').trigger('reset')
}

// on index posts success
const onIndexPostsSuccess = () => {
  $('#auth-message').text('Now viewing all posts')
}

// on index posts failure
const onIndexPostsFailure = () => {
  $('#auth-message').text('problem getting posts')
}

// show post by id success

// show post by id failure

// update post by id success

// update post by id failure

// delete post by id success

// delete post by id failure

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onCreatePostSuccess,
  onCreatePostFailure,
  onIndexPostsSuccess,
  onIndexPostsFailure
}
