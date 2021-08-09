// require in get form fields, ui, and api pages
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// on sign up
const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

// on sign in
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

// on sign out
const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

// on change password
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

// create a post
const onCreatePost = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  JSON.stringify(data)
  api.createPost(data)
    .then(ui.onCreatePostSuccess)
    .catch(ui.onCreatePostFailure)
}

// index posts
const onIndexPosts = function (event) {
  event.preventDefault()
  api.indexPosts()
    .then(ui.onIndexPostsSuccess)
    .catch(ui.onIndexPostsFailure)
}

// show post by id
const onShowPost = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.showPost(data)
    .then(ui.onShowPostSuccess)
    .catch(ui.onShowPostFailure)
}

// update post by id
const onUpdatePost = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  JSON.stringify(data)
  api.updatePost(data)
    .then(ui.onUpdatePostSuccess)
    .catch(ui.onUpdatePostFailure)
}

// delete post by id
const onDeletePost = function (event) {
  event.preventDefault()
  api.deletePost()
    .then(ui.onDeletePostSuccess)
    .catch(ui.onDeletePostFailure)
}

// module.exports
module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  onCreatePost,
  onIndexPosts,
  onShowPost,
  onUpdatePost,
  onDeletePost
}
