// require store for user token
const store = require('./../store')

// sign up
const signUp = function (data) {
  return $.ajax({
    url: 'http://localhost:4741/sign-up',
    method: 'POST',
    data
  })
}

// sign in
const signIn = function (data) {
  return $.ajax({
    url: 'http://localhost:4741/sign-in',
    method: 'POST',
    data
  })
}

// sign out
const signOut = function () {
  return $.ajax({
    url: 'http://localhost:4741/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    }
  })
}

// change password
const changePassword = function (data) {
  return $.ajax({
    url: 'http://localhost:4741/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.userToken
    },
    data
  })
}

// post crud goes below here

// module.exports
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
