# Flask To-Do App

A user-authenticated to-do list web application built with Flask. Users can register, log in, add tasks, mark them as completed, and delete tasks. It also supports account deletion.

## 🔧 Features

- User registration and login with password
- Dashboard showing:
  - Pending tasks
  - Completed tasks
- Add, complete, and delete tasks
- Delete user account (with confirmation)
- Responsive and clean UI using HTML/CSS/JavaScript
- Data persistence with SQLite

## 🛠️ Technologies Used

- Python
- Flask
- Flask-SQLAlchemy
- Flask-Login
- SQLite (for local DB)
- HTML, CSS, JavaScript

## ▶️ Setup Instructions

1. Clone the repository:

   ```
   git clone https://github.com/deba-biswas/todo-tracker.git
   cd flask-todo-app
   ```

2. Create a virtual environment:

   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:

   ```
   pip install -r requirements.txt
   ```

4. Run the app:

   ```
   python app.py
   ```

5. Open your browser and go to `http://127.0.0.1:5000/`

## ✍️ License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to fork or improve this project. Contributions are welcome!
