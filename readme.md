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

```json
{
  "title": "C",
  "body": "3"
}
#----
**Get All Posts:**

* **Method:** GET
* **Endpoint:** /posts

**Create Comment:**

4. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Start the Server:**

Method: POST
Endpoint: /likes/unlike
Request Body:
post (string): ID of the post to unlike
like (string): ID of the like to be removed (unique identifier for the like entry)
Example Request:
JSON
{
  "post": "669b956edae25fe63b6967a0",
  "like": "669b9601dae25fe63b6967ad"
}
