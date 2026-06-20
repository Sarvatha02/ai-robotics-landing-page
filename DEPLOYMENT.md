# 🚀 Step-by-Step Vercel & Netlify Deployment Guide

This guide details how to deploy the entire project (both the React frontend and the Express backend) using **Vercel** or **Netlify**.

---

## 📐 Method 1: Deploying Both Frontend & Backend on Vercel (Recommended)

Since this is a full-stack project, you will deploy **two separate projects** on Vercel (one for the `server` backend, and one for the `client` frontend).

### Step 1.1: Deploy the Backend (API Server) on Vercel
1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **Add New...** -> **Project**.
3. Import your GitHub repository (`kidrove-ai-robotics-workshop`).
4. **Configure Project Settings**:
   - **Project Name**: `kidrove-workshop-api`
   - **Framework Preset**: `Other` (or `None`)
   - **Root Directory**: Click `Edit` and select the `server` folder.
5. **Environment Variables**:
   - Under the **Environment Variables** section, add your MongoDB connection string:
     - **Key**: `MONGODB_URI`
     - **Value**: `your_mongodb_atlas_connection_string`
   - Add:
     - **Key**: `NODE_ENV`
     - **Value**: `production`
6. Click **Deploy**. Vercel will deploy the Express server as a serverless function and give you an API URL (e.g., `https://kidrove-workshop-api.vercel.app`). Copy this URL.

---

### Step 1.2: Deploy the Frontend (React App) on Vercel
1. Go back to your Vercel Dashboard and click **Add New...** -> **Project** again.
2. Select the same GitHub repository (`kidrove-ai-robotics-workshop`).
3. **Configure Project Settings**:
   - **Project Name**: `kidrove-workshop-client`
   - **Framework Preset**: `Vite` (Vercel should automatically detect this).
   - **Root Directory**: Click `Edit` and select the `client` folder.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Environment Variables**:
   - Add the backend URL variable so the frontend knows where the API is:
     - **Key**: `VITE_API_URL`
     - **Value**: `https://kidrove-workshop-api.vercel.app` (The URL you copied in Step 1.1).
5. Click **Deploy**. Vercel will build the frontend, and your React landing page will be live!

---

## ⚡ Method 2: Deploying Frontend on Netlify & Backend on Vercel

If you prefer to use Netlify for the frontend and Vercel for the backend, follow these steps:

### Step 2.1: Deploy the Backend on Vercel
- Follow **Step 1.1** above to deploy the `server` directory on Vercel. Copy the API URL (e.g., `https://kidrove-workshop-api.vercel.app`).

### Step 2.2: Deploy the Frontend on Netlify
1. Log in to [Netlify](https://www.netlify.com).
2. Click **Add new site** -> **Import an existing project**.
3. Choose **GitHub** and select your repository.
4. **Configure Site settings**:
   - **Base directory**: `client`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist` (This is relative to the `client` base directory).
5. **Configure Environment Variables**:
   - Go to **Site settings** -> **Environment variables** (or add it during setup).
   - Add the following environment variable:
     - **Key**: `VITE_API_URL`
     - **Value**: `https://kidrove-workshop-api.vercel.app` (Your backend Vercel URL).
6. Click **Deploy site**.

---

### 💡 Troubleshooting React Routing (Netlify Only)
If you add routing to your React frontend and get `404 Not Found` when refreshing sub-pages on Netlify, create a file named `_redirects` inside the `client/public/` folder with this line:
```text
/*    /index.html   200
```
Then commit and push it to GitHub. Netlify will auto-deploy and resolve the 404 issue.
