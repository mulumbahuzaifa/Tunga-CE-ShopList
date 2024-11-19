const mysql = require("mysql2/promise");

const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "shopping_list",
};

const db = mysql.createPool(dbConfig);

async function connectToDatabase() {
  try {
    await db.execute("SELECT 1");
    console.log("Connected to database");
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
}

module.exports = { db, dbConfig, connectToDatabase };
