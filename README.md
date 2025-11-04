# Grievance Forum for College Community

The Grievance Forum is a web-based application designed for a college community, allowing staff to post anonymous queries and administrators to resolve them. The system ensures privacy as users can only view their queries and not those of others, while administrators have access to all queries. This project is built using MongoDB, Express, Node.js, React, and JWT for authentication.

## Live Demo

Visit the live demo at: [Grievance Portal](https://grievance-portal-frontend-v1.onrender.com/)

## Features

- **Anonymous Query Posting**: Staff can anonymously post their grievances.
- **Query Resolution**: Admins can view and address all posted queries.
- **Role-Based Access Control**: Different interfaces and permissions for users and admins.
- **Secure Login and Signup**: Integrated user authentication.

## Screenshots

**Login Page**:
![Login Page](https://github.com/Hariharanm95/Grievance-Forum/assets/100566501/ae6817a3-e5fe-446e-9f08-0c30daa7f6fd)

**Signup Page**:
![Signup Page](https://github.com/Hariharanm95/Grievance-Forum/assets/100566501/7a23ac1f-28b9-4246-ac04-eeb03338695a)

**Admin Dashboard**:
![Admin Dashboard](https://github.com/Hariharanm95/Grievance-Forum/assets/100566501/2545f29a-a6e4-499a-8e49-caf8d40e5357)

**User Page**:
![User Page](https://github.com/Hariharanm95/Grievance-Forum/assets/100566501/13eda780-da05-4a9c-8b4b-0c48a6ba31c0)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine
- A MongoDB database setup

## Installation

Clone the project repository from GitHub:

```bash
git clone https://github.com/Hariharanm95/Grievance-Forum.git
cd Grievance-Forum
```

### Setup Backend

Navigate to the backend directory:

```bash
cd backend
```

Install the necessary dependencies:

```bash
npm install
```

Create a `.env` file in the backend directory and populate it with your settings:

```plaintext
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET=your_jwt_secret
```

Run the backend server:

```bash
npm run dev
```

### Setup Frontend

Open a new terminal and navigate to the frontend directory from the project root:

```bash
cd frontend
```

Install the required dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

The application should now be running and accessible at `http://localhost:3000`.

## Usage

Log in to the system using the credentials provided during the signup process. Depending on your role (user or admin), you will be directed to the appropriate interface where you can post grievances or manage them.

## Contributing

Contributions to the Grievance Forum are welcome. Please ensure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
