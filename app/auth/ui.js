// going to need to hide some of the functionalities until sign in success, place those here
// require store so we can store user token for authentication
const store = require('./../store')
$('#sign-out').hide()
$('#change-password').hide()
$('#forum').hide()
$('#index-posts').hide()
$('#show-post').hide()
$('#update-post').hide()
$('#post-forum').hide()
$('#delete-post').hide()

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
  $('#show-post').show()
  $('#update-post').show()
  $('#delete-post').show()
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
  $('#create-post').trigger('reset')
  $('#show-post').hide()
  $('#show-post').trigger('reset')
  $('#update-post').hide()
  $('#update-post').trigger('reset')
  $('#post-forum').hide()
  $('#delete-post').hide()
  $('#delete-post').trigger('reset')
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
  store.postId = response.post._id
  $('#auth-message').text(`Post created with post ID ${response.post._id}, keep this if you want to update or delete your post.`)
  $('#create-post').trigger('reset')
}

// on create post failure
const onCreatePostFailure = () => {
  $('#auth-message').text('There was an error creating the post.')
  $('#create-post').trigger('reset')
}

// on index posts success
const onIndexPostsSuccess = (response) => {
  const post = response.posts
  let postHTML
  post.forEach(post => {
    postHTML += `
    <h4>${post.title}</h4>
    <h6>${post.location}</h6>
    <p>${post.body}</p>
    `
  })
  $('#post-forum').show()
  $('#post-forum').html(postHTML)
  $('#auth-message').text('Now viewing all posts')
}

// on index posts failure
const onIndexPostsFailure = () => {
  $('#auth-message').text('problem getting posts')
}

// show post by id success
const onShowPostSuccess = (response) => {
  const post = response.posts
  // const postId = response.posts.id
  let searchedPostHTML
  post.findById(post => {
    searchedPostHTML += `
    <h4>${post.title}</h4>
    <h6>${post.location}</h6>
    <p>${post.body}</p>
    `
  })
  $('#post-forum').html(searchedPostHTML)
  $('#auth-message').text('Showing selected post.')
  $('#show-post').trigger('reset')
}

// show post by id failure
const onShowPostFailure = () => {
  $('#auth-message').text('Problem finding post, make sure the ID is correct.')
  $('#show-post').trigger('reset')
}

// update post by id success
const onUpdatePostSuccess = () => {
  $('#auth-message').text('Post updated successfully, click the Show All Posts button to view the updated post.')
  $('#update-post').trigger('reset')
}

// update post by id failure
const onUpdatePostFailure = () => {
  $('#auth-message').text('Failed to update post, make sure the post ID is correct. This is not going to work if you are not the owner of the post.')
}

// delete post by id success
const onDeletePostSuccess = () => {
  $('#auth-message').text('Post deleted, click show all posts and you will see it is gone.')
  $('#delete-post').trigger('reset')
}

// delete post by id failure
const onDeletePostFailure = () => {
  $('#auth-message').text('Error deleting post, make sure you gave it the right postId. If you are not the owner of the post, this will not work.')
}

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
  onIndexPostsFailure,
  onShowPostSuccess,
  onShowPostFailure,
  onUpdatePostSuccess,
  onUpdatePostFailure,
  onDeletePostSuccess,
  onDeletePostFailure
}
