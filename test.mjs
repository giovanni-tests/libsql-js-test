import Database from "libsql/promise";

const db = new Database(":memory:");

await db.exec(
  "CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)",
);
await db.exec(
  "INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'alice@example.org')",
);

const stmt = await db.prepare("SELECT * FROM users WHERE id = ?");
const row = stmt.get(1);

console.log(`Name: ${row.name}, email: ${row.email}`);
