const express = require('express');
const { Pool } = require('pg'); // Use pg instead of mysql2
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// --- DATABASE CONNECTION ---
// Render automatically provides the DATABASE_URL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

// 1. ADD DEVICE (PostgreSQL syntax uses $1, $2 instead of ?)
app.post('/api/add-device', async (req, res) => {
    const { name, roomId, type } = req.body;
    const sql = "INSERT INTO devices (room_id, device_name, device_type, status) VALUES ($1, $2, $3, 0)";
    try {
        await pool.query(sql, [roomId, name, type]);
        res.json({ success: true, message: "Device saved!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 2. ADMIN DATASET
app.get('/api/admin/dataset', async (req, res) => {
    if (req.headers['admin-auth'] !== 'kishan-secure-2026') return res.status(403).send("Unauthorized");
    try {
        const results = await pool.query("SELECT * FROM devices ORDER BY device_id DESC");
        res.json(results.rows);
    } catch (err) {
        res.status(500).json(err);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));