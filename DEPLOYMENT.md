# Deployment Guide for Grievance Portal

This guide explains how to deploy the Grievance Portal for free using Render (for the backend) and Vercel (for the frontend).

## Prerequisites

1.  Push your code to a GitHub repository.

## Part 1: Backend Deployment (Render)

1.  Sign up or log in to [Render](https://render.com/).
2.  Click **New +** and select **Web Service**.
3.  Connect your GitHub repository.
4.  Configure the service:
    *   **Name**: `grievance-portal-backend` (or similar)
    *   **Root Directory**: `backend`
    *   **Runtime**: Node
    *   **Build Command**: `npm install`
    *   **Start Command**: `node server.js`
5.  Scroll down to **Environment Variables** and add the following:
    *   `MONGO_URI`: Your MongoDB connection string (e.g., from MongoDB Atlas).
    *   `SECRET`: A secret string for JWT signing (can be anything random).
    *   `PORT`: `10000` (Render sets this automatically, but good to know).
6.  Click **Create Web Service**.
7.  Wait for the deployment to finish. Copy the **URL** (e.g., `https://grievance-portal-backend.onrender.com`). You will need this for the frontend.

## Part 2: Frontend Deployment (Vercel)

1.  Sign up or log in to [Vercel](https://vercel.com/).
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.
4.  Configure the project:
    *   **Framework Preset**: Create React App
    *   **Root Directory**: Click `Edit` and select `frontend`.
5.  Open the **Environment Variables** section and add:
    *   `REACT_APP_API_URL`: The URL of your deployed backend (from Part 1). **Important**: Do not add a trailing slash.
        *   Example: `https://grievance-portal-backend.onrender.com`
6.  Click **Deploy**.

## Post-Deployment Checks

1.  Open your Vercel deployment URL.
2.  Try to Sign Up or Login.
3.  If you see "API is running..." when visiting the backend URL directly, the backend is working.
4.  If you can login and see grievances, the connection is working.

## Notes

*   **Images**: Since Render's free tier does not have persistent storage, images uploaded will disappear if the server restarts (which happens frequently on free tier). For a permanent solution, you would need to integrate a cloud storage service like Cloudinary or AWS S3.
*   **Spin Down**: Render's free tier spins down after inactivity. The first request might take 30-60 seconds.
