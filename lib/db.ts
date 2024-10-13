import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',       // Replace with your MySQL username
  password: '',       // Replace with your MySQL password (usually blank in XAMPP)
  database: 'voltbridge',  // Replace with your database name
});
