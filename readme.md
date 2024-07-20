## API Documentation

This document provides a guide to the functionalities offered by the API. 

**Base URL:** http://localhost:8000/api/v1/

**Data Format:** JSON

**Authentication:** (Note: Authentication details are not included here, assuming they are implemented elsewhere)

### Posts

**Create Post:**

* **Method:** POST
* **Endpoint:** /posts/create
* **Request Body:**
    * title (string): Title of the post
    * body (string): Content of the post
* **Example Request:**

```json
{
  "title": "C",
  "body": "3"
}

Get All Posts:

Method: GET
Endpoint: /posts
Comments

Create Comment:

Method: POST
Endpoint: /comments/create
Request Body:
post (string): ID of the post the comment belongs to
user (string): Username of the person commenting
body (string): Content of the comment
Example Request:
JSON
{
  "post": "669b956edae25fe63b6967a0",
  "user": "lulla bhai",
  "body": "tum bahut mast kaam karta hai"
}

Likes
Like a Post:

Method: POST
Endpoint: /likes/like
Request Body:
post (string): ID of the post to like
user (string): Username of the user liking the post
Example Request:
JSON
{
  "post": "669b956edae25fe63b6967a0",
  "user": "Amar"
}
Use code with caution.

Unlike a Post:

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