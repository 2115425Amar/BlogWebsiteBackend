Blog Backend API
This is a backend API for a blogging platform built with Node.js and Express. The API allows users to create posts, comment on posts, and like/unlike posts.

Prerequisites
Node.js
npm or yarn
MongoDB
Getting Started
Installation
Clone the repository:
git clone 
cd blog-backend
npm install
Set up environment variables:

Create a .env file in the root of the project and add your MongoDB URI and other necessary environment variables:
PORT=8000
DATABASE_URL=your_mongodb_uri
Running the Server
Start the server with:npm start


The server will start on the port specified in the .env file (default is 8000).

API Endpoints
Create a Post
Endpoint: POST /api/v1/posts/create

Request Body:
{
  "title": "C",
  "body": "3"
}


Description: This endpoint creates a new post.

Get All Posts
Endpoint: GET /api/v1/posts
Description: This endpoint retrieves all posts.
Create a Comment
Endpoint: POST /api/v1/comments/create

Request Body:
{
  "post": "669b956edae25fe63b6967a0",
  "user": "lulla bhai",
  "body": "tum bahut mast kaam karta hai"
}

Description: This endpoint creates a new comment on a post.

Like a Post
Endpoint: POST /api/v1/likes/like

Request Body:
{
  "post": "669b956edae25fe63b6967a0",
  "user": "Amar"
}
Description: This endpoint likes a post.

Unlike a Post
Endpoint: POST /api/v1/likes/unlike

Request Body:
{
  "post": "669b956edae25fe63b6967a0",
  "like": "669b9601dae25fe63b6967ad"
}


Database Configuration
Ensure MongoDB is running and the connection URI is correctly set in the .env file.

Contributing
Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m 'Add new feature')
Push to the branch (git push origin feature-branch)
Open a Pull Request
License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or inquiries, please contact:

Your Name -amar8601082@gmail.com
GitHub: https://github.com/2115425Amar
