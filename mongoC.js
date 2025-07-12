import { MongoClient } from "mongodb";

const password = encodeURIComponent(process.env.MONGO_PASSWORD.trim());
const connectionString = `mongodb+srv://atharvshinde134:${password}@cluster1.rdcubcw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`; // cluster url
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
  console.log("connection successful")
} catch(e) {
  console.error(e);
}
let db = conn.db("atharvshinde134");
export default db;
