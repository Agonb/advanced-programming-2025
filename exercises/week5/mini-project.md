### 🧪 **Assignment: Full Stack Mini App with Docker Compose**

#### 🎯 **Objective:**
Build and containerize a small full-stack web application using **Node.js**, a **database of your choice**, and a **minimal frontend**. Use **Docker Compose** to run the entire stack with one command.

---

### 📦 **Project Requirements:**

#### 🔧 1. **Backend (Node.js):**
- Use **Express.js** to build a simple REST API.
- Create **one resource** (e.g., `tasks`, `notes`, `products`, etc.) with the following features:
  - **GET** all items
  - **POST** a new item
  - Optional: **DELETE** an item by ID

#### 💾 2. **Database (Your choice):**
Choose **one** from the following:
- **PostgreSQL**
- **MongoDB**
- **MySQL**
- **SQLite** (in a volume)

Use it to store your resource data. The database must:
- Be launched as a separate service in Docker Compose.
- Be connected to your backend using environment variables.

#### 🎨 3. **Frontend (Minimal):**
- Use **HTML + JavaScript** (can be plain or use a small framework like Vue/React if you prefer).
- Must show:
  - A list of the items (fetched from the backend).
  - A form to create a new item.

No styling or design is required—focus on **functionality**.

#### 🐳 4. **Docker & Docker Compose:**
- Create a `Dockerfile` for the backend (and for the frontend if needed).
- Define all services in `docker-compose.yml`:
  - Backend
  - Database
  - Frontend (can be served using nginx or Node.js)
- Running `docker compose up` should launch the entire app.
- Use volumes and environment variables as needed.

---

### 📝 **Deliverables:**
- A GitHub repo with:
  - `backend/` folder with source code and Dockerfile
  - `frontend/` folder with HTML/JS and Dockerfile or config
  - `docker-compose.yml` at root
  - A `README.md` with:
    - Brief project description
    - How to run the app using Docker Compose
    - Screenshot of working app (optional but nice)

---

### ✅ **Evaluation Criteria:**
| Criterion | Description |
|----------|-------------|
| ✅ Docker Compose setup | All services start with `docker compose up` |
| ✅ Working backend | Can GET and POST resource items |
| ✅ Connected database | Data is stored and retrieved properly |
| ✅ Functional frontend | Can view and create items |
| ✅ Code clarity | Clean, organized code and repo |
| ✅ README | Clear instructions to run the app |

---
