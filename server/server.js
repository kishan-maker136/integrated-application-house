const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serves your HTML/JS from the public folder

// --- DATABASE CONNECTION ---
// connectionString will be the URI you get from Supabase
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// --- ROUTES ---

// 1. ADD DEVICE
app.post('/api/add-device', async (req, res) => {
    const { name, roomId, type } = req.body;
    const sql = "INSERT INTO devices (room_id, device_name, device_type, status) VALUES ($1, $2, $3, 0)";
    try {
        await pool.query(sql, [roomId, name, type]);
        res.json({ success: true, message: "Device saved to Supabase!" });
    } catch (err) {
        console.error("DB Error:", err.message);
        res.status(500).json({ error: err.message });
    }
});

// 2. STATUS TOGGLE (NEW - Added for your dashboard functionality)
app.post('/api/update-status', async (req, res) => {
    const { id, status } = req.body;
    const sql = "UPDATE devices SET status = $1 WHERE device_id = $2";
    try {
        await pool.query(sql, [status, id]);
        res.json({ success: true });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 3. ADMIN DATASET (With Security Check)
app.get('/api/admin/dataset', async (req, res) => {
    if (req.headers['admin-auth'] !== 'kishan-secure-2026') {
        return res.status(403).send("Unauthorized Access");
    }
    try {
        const results = await pool.query("SELECT * FROM devices ORDER BY device_id DESC");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- VERCEL & LOCAL SUPPORT ---
// This allows the app to work on Vercel AND on your laptop
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`🚀 Local server: http://localhost:${PORT}`));
}

module.exports = app; // Required for Vercel Serverless Functions