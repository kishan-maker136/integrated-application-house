# 🏠 Integrated Application House

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:4facfe,100:00f2fe&height=200&section=header&text=Integrated%20Application%20House&fontSize=40&fontColor=ffffff&animation=fadeIn" />

<br/>

![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Supabase-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Security](https://img.shields.io/badge/Security-Focused-blue?style=for-the-badge)

<br/>

**🚀 A Secure, Serverless Smart Home Dashboard for Real-Time Device Management and Data Persistence.**

🌐 **Live Demo:** [View Project on Vercel](https://project-cfi34-dy4nem3l4-kishan-maker136s-projects.vercel.app)  
📖 **API Base:** `https://project-cfi34-dy4nem3l4-kishan-maker136s-projects.vercel.app/api`

</div>

---

## 🚀 Project Overview

The **Integrated Application House** is a professional-grade IoT management ecosystem. It bridges the gap between hardware logic and cloud-native software architecture, providing a secure interface to control home environments from anywhere in the world.

> *"Built with a security-first mindset, this project demonstrates how to handle sensitive IoT data using modern cloud infrastructure and protected API patterns."*

---

## ✨ Key Features

| Feature                | Technical Implementation                                    |
| ---------------------- | ----------------------------------------------------------- |
| 🔐 **Secure Backend** | Node.js with Parameterized SQL (Prevents SQL Injection)     |
| 💡 **Device Control** | Real-time state management via RESTful API                 |
| ☁️ **Cloud Database** | Supabase (PostgreSQL) in `ap-south-1` for low latency      |
| ⚡ **Serverless logic** | Hosted on Vercel Edge functions for 99.9% availability      |
| 🛡️ **Secret Shield** | Zero-leak credential management via Vercel Environment Vars |
| 📱 **Responsive UI** | Fluid layout designed for mobile and desktop dashboards     |

---

## 🏗️ System Architecture



```mermaid
graph LR
    A[Frontend: JS/HTML5] -- REST API --> B[Vercel Serverless Functions]
    B -- Secure Connection --> C[Supabase PostgreSQL]
    C -- Data Persistence --> B
    B -- JSON Response --> A
