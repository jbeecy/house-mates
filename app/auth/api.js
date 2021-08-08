// require store for user token
const store = require('./../store')

// sign up
const signUp = function (data) {
  return $.ajax({
    url: 'https://still-refuge-85955.herokuapp.com/sign-up',
    method: 'POST',
    data
  })
}

// sign in
const signIn = function (data) {
  return $.ajax({
    url: 'https://still-refuge-85955.herokuapp.com/sign-in',
    method: 'POST',
    data
  })
}

// sign out
const signOut = function () {
  return $.ajax({
    url: 'https://still-refuge-85955.herokuapp.com/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    }
  })
}

// change password
const changePassword = function (data) {
  return $.ajax({
    url: 'https://still-refuge-85955.herokuapp.com/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    },
    data
  })
}

// post crud goes below here

// create post
const createPost = function (data) {
  return $.ajax({
    url: 'https://still-refuge-85955.herokuapp.com/posts',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    },
    data
  })
}

// index posts
const indexPosts = function () {
  return $.ajax({
    url: 'https://still-refuge-85955.herokuapp.com/posts',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    }
  })
}

// show post by id

// update post by id

// delete post by id

// module.exports
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  createPost,
  indexPosts
}
