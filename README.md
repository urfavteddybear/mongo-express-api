# API Documentation
## 💁‍♀️ Allowed HTTP request
- GET : To GET data from the API
- POST    : To send POST request to the API ( Create data )
- PUT     : To send PUT request to the API ( Update data )
- DELETE  : To delete data on the API 
## 📝 Description Of Usual Server Responses
- 200 `OK` - Request was successful
- 404 `Not Found` - Requested data was not found
- 400 `Bad Request` - Requested data was invalid
## 🔖 GET Method Example
### Getting all data
#### Book URL : 
```
http://localhost:3000/api/books
```
#### Result Examples :
```json
[
    {
        "_id": "66e508a7390af2e5c8abfd91",
        "title": "Book 1",
        "author": "Author 1",
        "category": {
            "_id": "66e508a7390af2e5c8abfd8a",
            "name": "Category 3"
        },
        "publishedYear": 2001,
        "__v": 0
    },
    {
        "_id": "66e508a7390af2e5c8abfd93",
        "title": "Book 2",
        "author": "Author 2",
        "category": {
            "_id": "66e508a6390af2e5c8abfd86",
            "name": "Category 1"
        },
        "publishedYear": 2002,
        "__v": 0
    },
    {
        "_id": "66e508a7390af2e5c8abfd95",
        "title": "Book 3",
        "author": "Author 3",
        "category": {
            "_id": "66e508a6390af2e5c8abfd86",
            "name": "Category 1"
        },
        "publishedYear": 2003,
        "__v": 0
    },
]
```
#### Category URL : 
```
http://localhost:3000/api/categories
```
#### Result Examples :
```json
[
    {
        "_id": "66e508a6390af2e5c8abfd86",
        "name": "Category 1",
        "description": "Description for Category 1",
        "__v": 0
    },
    {
        "_id": "66e508a6390af2e5c8abfd88",
        "name": "Category 2",
        "description": "Description for Category 2",
        "__v": 0
    },
    {
        "_id": "66e508a7390af2e5c8abfd8a",
        "name": "Category 3",
        "description": "Description for Category 3",
        "__v": 0
    },
]
```
### Getting a specific book data based on ID
#### Book URL : 
```
http://localhost:3000/api/books/{id}
```
#### Result Examples :
```json
{
    "_id": "66e508a7390af2e5c8abfd91",
    "title": "Book 1",
    "author": "Author 1",
    "category": {
        "_id": "66e508a7390af2e5c8abfd8a",
        "name": "Category 3"
    },
    "publishedYear": 2001,
    "__v": 0
}
```
#### Category URL : 
```
http://localhost:8000/api/categories/{id}
```
#### Result Examples :
```json
[
    {
        "_id": "66e508a6390af2e5c8abfd86",
        "name": "Category 1",
        "description": "Description for Category 1",
        "__v": 0
    },
]
```
## 🧾 POST Method Example
### Book Example
#### URL :
```
http://localhost:8000/api/books
```
#### Body :
```json
{
  "title": "The Time Machine",
  "author": "H.G. Wells",
  "category": "66e508a6390af2e5c8abfd86",
  "publishedYear": 1895
}
```
### bookCategory Example
#### URL :
```
http://localhost:3000/api/categories
```
#### Body :
```json
{
  "name": "Science Fiction",
  "description": "Books about futuristic technology and space exploration"
}
```
## ✍ PUT Method Example
### Book Example
#### URL :
```
http://localhost:3000/api/books/{id}
```
#### Body :
```json
{
  "title": "The War of the Worlds",
  "author": "H.G. Wells",
  "category": "64fa24679387c8490eaf7081",
  "publishedYear": 1898
}
```
### Category Example
#### URL :
```
http://localhost:3000/api/categories/{id}
```
#### Body :
```json
{
  "name": "Sci-Fi",
  "description": "Updated description for the Sci-Fi category"
}
```
## ❌ DELETE Method Example
### Book
#### URL :
```
http://localhost:8000/api/books/{id}
```
### bookCategory
#### URL :
```
http://localhost:8000/api/categories/{id}
```