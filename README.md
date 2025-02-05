# CRUD API with Node.js and MongoDB

This project is a simple **CRUD (Create, Read, Update, Delete) API** for a blogging platform built using **Node.js** and **MongoDB**. It provides RESTful API endpoints to manage blog posts efficiently.

## 📌 Features
- Develop a RESTful API using **Node.js** and **Express**
- Integrate **MongoDB** for data storage
- Implement **CRUD operations** (Create, Read, Update, Delete)
- Perform **data validation** to ensure title and body exist
- Handle **error cases** properly with appropriate HTTP status codes
- Use **Postman** or similar tools for API testing

## 🚀 Getting Started
### 1️⃣ Installation
Make sure you have **Node.js** and **MongoDB** installed.

```bash
git clone https://github.com/Temutjin2k/NodeMongo.git
cd NodeMongo
npm install
```

### 2️⃣ Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string:
```env
MONGO_URI=mongodb://localhost:27017/blogDB
PORT=5000
```

### 3️⃣ Running the Server
Start the Express server:
```bash
npm start
```
The API will be available at `http://localhost:5000`.

## 📌 API Endpoints
| Method | Endpoint      | Description |
|--------|-------------|-------------|
| POST   | `/blogs`      | Create a new blog post |
| GET    | `/blogs`      | Retrieve all blog posts |
| GET    | `/blogs/:id`  | Retrieve a single blog post by ID |
| PUT    | `/blogs/:id`  | Update a blog post by ID |
| DELETE | `/blogs/:id`  | Delete a blog post by ID |

---
**Web Technologies 2 (Backend) - Temutjin Koszhanov, AITU 2025**
