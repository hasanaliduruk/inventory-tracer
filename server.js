const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const pool = require("./db"); // PostgreSQL bağlantısı

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Kullanıcı tablosunu oluştur (ilk çalıştırmada lazım)
pool.query(`
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
  )
`);

// Kayıt ol (Sign Up)
app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    await pool.query("INSERT INTO users (email, password) VALUES ($1, $2)", [email, hashedPassword]);

    res.json({ message: "User registered successfully" });
});

// Giriş yap (Sign In)
app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.rows[0].id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, userId: user.rows[0].id });
});

// Sunucuyu başlat
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
