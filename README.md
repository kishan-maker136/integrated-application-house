# 🏠 Integrated Application House

::: {align="center"}
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployment-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=for-the-badge)
![Security](https://img.shields.io/badge/Security-Hardened-blue?style=for-the-badge)

**A secure, centralized smart home intelligence ecosystem for real-time
device control and cloud-native data management.**
:::

------------------------------------------------------------------------

## 🚀 Project Overview

The **Integrated Application House** is a full-stack IoT management
platform.

------------------------------------------------------------------------

## ⚙️ Setup Instructions

``` bash
git clone https://github.com/kishan-maker136/integrated-application-house.git
cd integrated-application-house
npm install
node server.js
```

------------------------------------------------------------------------

## 🗄️ Database Setup

``` sql
CREATE TABLE devices (
    device_id SERIAL PRIMARY KEY,
    room_id INT,
    device_name VARCHAR(255),
    device_type VARCHAR(100),
    status INT DEFAULT 0
);
```

------------------------------------------------------------------------

## 👨💻 Author

Kishan BC\
GitHub: https://github.com/kishan-maker136

