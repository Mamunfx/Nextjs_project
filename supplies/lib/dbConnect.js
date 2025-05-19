import { MongoClient, ServerApiVersion } from "mongodb"; 

export default function dbConnect(collectionName){
    const uri = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster5.ere94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster5`;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    return client.db("supplies").collection(collectionName);
}
