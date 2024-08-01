# Blog API

## Overview

This API provides functionality to manage blog posts, comments, and likes. It includes endpoints for creating posts, creating comments, liking and unliking posts, and retrieving all posts.

## Features

- **Create Post**: Add a new blog post.
- **Get All Posts**: Retrieve a list of all blog posts.
- **Create Comment**: Add a comment to a specific post.
- **Like a Post**: Like a specific post.
- **Unlike a Post**: Remove a like from a specific post.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/2115425Amar/BlogWebsiteBackend.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd your-repository
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Start the Server:**

   ```bash
   npm start
   ```

## API Endpoints

### Get All Posts

- **Method:** `GET`
- **Endpoint:** `/api/v1/posts`
- **Description:** Retrieves a list of all blog posts.

### Create Post

- **Method:** `POST`
- **Endpoint:** `/api/v1/posts/create`
- **Request Body:**
  ```json
  {
    "title": "string",  // Title of the post
    "body": "string"    // Content of the post
  }
  ```
- **Example Request:**
  ```json
  {
    "title": "My New Post",
    "body": "This is the content of the post."
  }
  ```

### Create Comment

- **Method:** `POST`
- **Endpoint:** `/api/v1/comments/create`
- **Request Body:**
  ```json
  {
    "post": "string",  // ID of the post the comment belongs to
    "user": "string",  // Username of the person commenting
    "body": "string"   // Content of the comment
  }
  ```
- **Example Request:**
  ```json
  {
    "post": "669b956edae25fe63b6967a0",
    "user": "lulla bhai",
    "body": "tum bahut mast kaam karta hai"
  }
  ```

### Like a Post

- **Method:** `POST`
- **Endpoint:** `/api/v1/likes/like`
- **Request Body:**
  ```json
  {
    "post": "string",  // ID of the post to like
    "user": "string"   // Username of the user liking the post
  }
  ```
- **Example Request:**
  ```json
  {
    "post": "669b956edae25fe63b6967a0",
    "user": "Amar"
  }
  ```

### Unlike a Post

- **Method:** `POST`
- **Endpoint:** `/api/v1/likes/unlike`
- **Request Body:**
  ```json
  {
    "post": "string",  // ID of the post to unlike
    "like": "string"   // ID of the like to be removed (unique identifier for the like entry)
  }
  ```
- **Example Request:**
  ```json
  {
    "post": "669b956edae25fe63b6967a0",
    "like": "669b9601dae25fe63b6967ad"
  }
  ```

## Controllers

### PostController

- **`createPost`**: Creates a new post in the database.
- **`getAllPost`**: Retrieves all posts from the database.

### CommentController

- **`createComment`**: Adds a new comment to a specified post.

### LikeController

- **`likePost`**: Likes a specified post.
- **`unlikePost`**: Removes a like from a specified post.
- **`dummyLink`**: Returns a dummy response for testing purposes.

## Database

Ensure that you have MongoDB running and configured properly. The connection string should be set in the `.env` file as `MONGO_URI`.

## Error Handling

The API provides standard HTTP status codes to indicate the success or failure of requests. Common status codes include:

- **200 OK**: The request was successful.
- **400 Bad Request**: The request was invalid or malformed.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

<!-- This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. -->

## Contact

For any questions or support, please contact Amar Gupta at [amar8601082@gmail.com].

---