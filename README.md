# 🗒️ Note-Taking Application (With Authentication & Deployment)

🔗 **Live Project URL:**  
👉 https://note-taking-ap.netlify.app/

---

## 📌 Project Description
This is a Note-Taking Application built using **React.js** that allows users to securely create, edit, delete, and manage their personal notes.  
The application uses **JWT-based authentication** to ensure that only authenticated users can access and manage notes.  
Notes data is stored using **MockAPI**, enabling full CRUD operations with persistent storage.

---

## 🔐 Authentication (Login & Logout)
- Login using username and password
- JWT token is received on successful login
- JWT token is stored in `localStorage`
- Only authenticated users can:
  - Create notes
  - Edit notes
  - Delete notes
  - View notes list
- Unauthenticated users are redirected to the Login page
- Logout clears JWT token and redirects to Login page

---

## 🚀 Core Features

### 👤 User Features
- Login & Logout
- Create new notes
- Edit existing notes
- Delete notes
- View all notes
- Search notes by title

### 🌐 Data Management
- Notes data stored in **MockAPI**
- User-specific notes using username field
- Full CRUD operations:
  - Create (POST)
  - Read (GET)
  - Update (PUT)
  - Delete (DELETE)
- Notes persist after page refresh

### 🎨 UI & UX
- Clean and responsive UI
- Styled buttons and inputs
- Error handling for:
  - Empty note submission
  - Invalid login credentials
  - Unauthorized access

---

## 🛠️ Tech Stack
- React.js
- React Router
- JWT Authentication
- MockAPI
- CSS
- Netlify (Deployment)

---

## 🔄 Application Flow
1. User opens the application
2. If not logged in → Redirected to Login page
3. On successful login → JWT token stored
4. Notes page is displayed
5. User can create, edit, delete, and search notes
6. Logout → Token removed → Redirected to Login page

---

## 🧪 Edge Cases Handled
- Invalid login credentials
- Unauthorized access to protected routes
- Empty note submission
- Page refresh (login persists using JWT)
- API failure handling

---

