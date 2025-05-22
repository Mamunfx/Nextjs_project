import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.db_user || !process.env.db_password) {
  throw new Error("Please define db_user and db_password in your environment");
}

const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster5.ere94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5`;
let cachedClient = global._mongoClient;

if (!cachedClient) {
  cachedClient = new MongoClient(uri, {
    serverApi: { version: ServerApiVersion.v1, strict: true, deprecationErrors: true },
  });
  global._mongoClient = cachedClient;
}

export default function dbConnect(collectionName) {
  return cachedClient.db("supplies").collection(collectionName);
}