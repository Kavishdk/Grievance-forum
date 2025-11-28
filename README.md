# 🏛️ Grievance Portal

![MERN Stack](https://img.shields.io/badge/MERN-Stack-green)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Active-success)

A robust, full-stack web application designed to streamline the grievance redressal process for educational institutions. This portal enables staff and students to anonymously lodge complaints while providing administrators with a powerful dashboard to manage and resolve them efficiently.

---

## 🚀 Live Demo

**[View Live Application](https://grievance-portal-frontend-v1.onrender.com/)** *(Replace with your actual deployed URL)*

---

## ✨ Key Features

### 👤 For Users (Staff/Students)
*   **Anonymous Reporting**: Lodge grievances without fear of identity disclosure.
*   **Real-time Tracking**: Monitor the status of submitted grievances (Pending, In Progress, Resolved).
*   **Secure Authentication**: JWT-based login and signup for account security.
*   **Image Attachments**: Support for uploading evidence/images with complaints.
*   **Categorized Filing**: Organize complaints by department, category, and priority.

### 🛡️ For Administrators
*   **Centralized Dashboard**: View all grievances in one place.
*   **Status Management**: Update grievance status and provide official responses.
*   **Filtering & Sorting**: Easily filter complaints by category or department.
*   **Role-Based Access**: Secure admin-only routes and functionalities.

---

## 🛠️ Tech Stack

| Component | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) | Dynamic user interface with React Hooks and Context API. |
| **Backend** | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-404D59?style=flat) | RESTful API architecture. |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white) | NoSQL database for flexible data storage. |
| **Authentication** | ![JWT](https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens) | JSON Web Tokens for stateless authentication. |
| **Deployment** | ![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) | Cloud hosting for Backend and Frontend. |

---

## 📸 Screenshots

| Login Page | Signup Page |
|:---:|:---:|
| ![Login](https://github.com/Hariharanm95/Grievance-Forum/assets/100566501/ae6817a3-e5fe-446e-9f08-0c30daa7f6fd) | ![Signup](https://github.com/Hariharanm95/Grievance-Forum/assets/100566501/7a23ac1f-28b9-4246-ac04-eeb03338695a) |

| User Dashboard | Admin Dashboard |
|:---:|:---:|
| ![User](https://github.com/Hariharanm95/Grievance-Forum/assets/100566501/13eda780-da05-4a9c-8b4b-0c48a6ba31c0) | ![Admin](https://github.com/Hariharanm95/Grievance-Forum/assets/100566501/2545f29a-a6e4-499a-8e49-caf8d40e5357) |

---

## ⚙️ Installation & Setup (Local)

Follow these steps to run the project locally on your machine.

### Prerequisites
*   Node.js (v14+)
*   MongoDB (Local or Atlas URI)

### 1. Clone the Repository
```bash
git clone https://github.com/Kavishdk/Grievance-forum.git
cd Grievance-forum
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret_key
```
Start the server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal:
```bash
cd frontend
npm install
npm start
```
The app will launch at `http://localhost:3000`.

---

## 🌍 Deployment

This project is configured for easy deployment.
*   **Backend**: Render / Railway / Heroku
*   **Frontend**: Vercel / Netlify

👉 **[Read the Full Deployment Guide](DEPLOYMENT.md)**

---

## 🤝 Contributing

Contributions are welcome!
1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**Kavishdk** - [GitHub Profile](https://github.com/Kavishdk)

Project Link: [https://github.com/Kavishdk/Grievance-forum](https://github.com/Kavishdk/Grievance-forum)
