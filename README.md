# 🏠 Integrated Application House

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Security](https://img.shields.io/badge/Security-Hardened-blue?style=for-the-badge)

**A secure, centralized smart home intelligence ecosystem for real-time device control and cloud-native data management.**

</div>

---

## 🚀 Project Overview

The **Integrated Application House** is a full-stack IoT management platform designed to:

- 🔐 Secure device communication via REST APIs  
- ☁️ Persist data using PostgreSQL (Supabase)  
- 📊 Monitor logs through an admin dashboard  
- ⚡ Scale using serverless architecture (Vercel)  

---

## ✨ Features

- 💡 Real-time device ON/OFF control  
- 🛡️ Secure admin dataset monitoring  
- ⚡ Serverless backend (Vercel Functions)  
- 📦 Persistent PostgreSQL storage  
- 🎨 Responsive UI (Flexbox + Grid)  
- 🔐 Built-in SQL injection protection  

---

## 🏗️ Architecture

Frontend (Dashboard UI)
│
▼
Vercel Edge Routing
│
▼
Node.js + Express API
│
├── Secure Queries ($1, $2)
│
▼
Supabase PostgreSQL
│
▼
JSON Response → UI Update


---

## 🛡️ Security Architecture

- 🔐 **Parameterized Queries** → Prevent SQL Injection  
- 🔑 **Environment Variables** → No hardcoded secrets  
- 🌐 **CORS Policy** → Restricted API access  
- 🛡️ **Sanitized Errors** → No sensitive leaks  

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|-----------|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js, Express.js |
| Database | Supabase (PostgreSQL) |
| Deployment | Vercel |
| Middleware | dotenv, cors, pg |

---

## 🎥 Live Demo

🌐 **Live App:**  
https://project-cfi34-dy4nem3l4-kishan-maker136s-projects.vercel.app

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/kishan-maker136/integrated-application-house.git
cd integrated-application-house
```

### 2️⃣ Install Dependencies

```bash
npm install
```

---

## 🗄️ Database Setup & Access

### 🔹 Step 1: Create Supabase Project

- Go to https://supabase.com  
- Create a new project  
- Wait for database initialization  

---

### 🔹 Step 2: Create Table

```sql
CREATE TABLE devices (
    device_id SERIAL PRIMARY KEY,
    room_id INT,
    device_name VARCHAR(255),
    device_type VARCHAR(100),
    status INT DEFAULT 0
);
```

---

### 🔹 Step 3: Get DATABASE_URL

Go to:  
**Project Settings → Database → Connection String**

Example:

```bash
postgresql://postgres:password@db.xxxxxx.supabase.co:5432/postgres
```

---

### 🔹 Step 4: Configure Environment

Create a `.env` file:

```env
DATABASE_URL=your_supabase_connection_string
```

---

### 🔹 Step 5: Run Server

```bash
node server.js
```

Server runs at:

```
http://localhost:3000
```

---

## 🧪 API Testing

### 🔹 Get All Devices

```
GET http://localhost:3000/devices
```

### 🔹 Update Device

```
POST http://localhost:3000/update-device
```

---

## 🗃️ Access Database

### 🔸 Option 1: Supabase Dashboard
- Use **Table Editor** to view and edit data

---

### 🔸 Option 2: pgAdmin / DBeaver

| Field     | Value                  |
|----------|------------------------|
| Host     | db.xxxxxx.supabase.co |
| Port     | 5432                  |
| User     | postgres              |
| Password | your-password         |
| Database | postgres              |

---

### 🔸 Option 3: psql CLI

```bash
psql "your_DATABASE_URL"
```

---

## 🧠 What Makes This Special?

| Basic IoT Project | This Project |
|------------------|-------------|
| Local only       | ✅ Cloud-based |
| No database      | ✅ PostgreSQL |
| Vulnerable       | ✅ Secure queries |
| Manual deploy    | ✅ CI/CD |

---

## 🚀 Future Improvements

- 🔐 JWT Authentication  
- 👥 Role-based access  
- 📊 Analytics dashboard  
- 📱 Mobile app  
- 🌐 Real IoT integration  

---

## 👨‍💻 Author

<div align="center">

**Kishan BC**  
B.Tech CSE (Cybersecurity)  
Presidency University, Bangalore  

🔗 https://github.com/kishan-maker136  

</div>

---

## ⭐ Support

<div align="center">

If you found this useful:

⭐ Star the repo  
🍴 Fork it  
📢 Share it  

<br><br>

💡 *Building secure systems today for a smarter tomorrow.*

</div>
