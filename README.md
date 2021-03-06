# House Mates: social media specifically for finding a roommate.

## Important Links

Check out my [House Mates Project](https://jbeecy.github.io/house-mates/)

Click [here](https://github.com/jbeecy/house-mates-api) to check out the deployed API.

## About House Mates

House Mates in a forum specifically designed for finding a roommate. I am sure we all know how not fun planning a housing situation can be. The goal of this application is to make finding a roommate easier for those who need it. 

To get started, make sure to register in the sign up form then sign in. Once signed in, you will be able to create a post, show all posts, update a post of yours, and delete a post of yours if you need to. You can also change your password. Once you have created a post, you will be given a post ID, hang on to this incase you want to update or delete your post. 

Show all posts will do exactly what you expect: it will show you all posts that have not been deleted. 

Update and delete post require ownership, meaning only the user that created the post can perform those actions.

If you create a new post, click on the show all posts button to display your new post.

## Planning Story

I got the idea for creating an application like House Mates a long time ago working at my old job. My old employer owned a website for finding apartments, and I thought it might be a good idea to create a forum within that platform for people who are moving from out of the area and might need help finding roommates in an area they do not know. While designing the application, I also had the thought that this kind of application might be useful for university life, helping underclassmen and even upperclassmen find roommates should they need it.

## Wireframe

![Wireframe image](https://media.git.generalassemb.ly/user/37148/files/35238980-f9cf-11eb-876e-a06a8f70835f)

## User Stories
- User will be able to sign up
- User will be able to sign in
- User will be able to sign out after successful sign in
- User will be able to change password only when signed in
- User will be able to view posts
- User will be able to create posts
- User will be able to update posts (only theirs)
- User will be able to delete posts (only theirs)

Stretch user stories:

- User will be able to pin posts
- User will be able to comment on posts
- User will be able to filter posts by general location
- User will be able to view other profiles (not making any changes just viewing)

## Technologies Used

- jQuery
- Bootstrap
- HTML/CSS
- JavaScript
- Express API
- MongoDB

## Unsolved Problems

- I still need to get show for a single resource working.
- I would like to get version 2 going, where users will be able to dynamically update posts and delete posts without punching in the post IDs.
- I would like users to be able to filter by location, and have location be selected from a drop down menu or from a map view/with zip code.
- I would like users to be able to modify their profile and display a profile picture with identity verification.
- I would like users to be able to pin posts or comment on posts, and eventually be able to private message a poster.
