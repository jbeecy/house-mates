// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-post').on('submit', authEvents.onCreatePost)
  $('#index-posts').on('click', authEvents.onIndexPosts)
  // $('#show-post').on('submit', authEvents.onShowPost)
  $('#update-post').on('submit', authEvents.onUpdatePost)
  $('#delete-post').on('submit', authEvents.onDeletePost)
})
