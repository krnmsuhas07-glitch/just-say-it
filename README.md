# 💬 Just Say It

Just Say It is a simple CRUD web app I built while learning **Node.js and Express.js**.

The main idea was to understand how a frontend communicates with a backend, how routes work, and how CRUD operations are handled using Express.

## What can you do?

* Create a post
* View all posts
* Open a single post
* Edit a post
* Delete a post

## Tech Used

* Node.js
* Express.js
* EJS
* HTML
* CSS
* Method-Override

There is **no database** in this version. Posts are stored in memory, so they disappear when the server restarts.

## How the routes work

| Action         | Method | Route             |
| -------------- | ------ | ----------------- |
| View all posts | GET    | `/posts`          |
| Create form    | GET    | `/posts/new`      |
| Create post    | POST   | `/posts`          |
| View a post    | GET    | `/posts/:id`      |
| Edit form      | GET    | `/posts/:id/edit` |
| Update post    | PATCH  | `/posts/:id`      |
| Delete post    | DELETE | `/posts/:id`      |

For the edit and delete forms, I used **method-override** because normal HTML forms only support GET and POST.

## Project Structure

```text
Just-Say-It/
│
├── public/
│   └── style.css
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── show.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

## What I learned

While building this, I got more comfortable with:

* Express routes
* REST APIs
* CRUD operations
* GET, POST, PATCH and DELETE
* EJS templates
* HTML forms
* `req.params` and `req.body`
* Method-Override
* Connecting frontend pages with backend routes

## Frontend

I built the backend and application logic myself.

For the frontend, I used **AI assistance for the UI design and CSS**, then integrated it into the application myself.

## Run it locally

Clone the repo and install the dependencies:

```bash
npm install
```

Start the server:

```bash
node index.js
```

Then open:

```text
http://localhost:8080/posts
```

## Future Improvements

Things I could add later:

* MongoDB/PostgreSQL
* User authentication
* Better validation and error handling
* Search and filtering
* Deployment

---

### 👨‍💻 Built by Suhas

This project was mainly built to get comfortable with **Node.js + Express.js and backend fundamentals**.
