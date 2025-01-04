require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PASS}@cluster0.s7kzw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const database = client.db("visasDB");
    const visas = database.collection("visas");
    const applyVisas = database.collection("applyVisas");
    const feedback = database.collection("feedback");

    app.get("/visas", async (req, res) => {
      const result = await visas.find().toArray();
      res.send(result);
    });
    app.get("/feedback", async (req, res) => {
      const result = await feedback
        .find()
        .sort({ time: -1 })
        .limit(4)
        .toArray();
      res.send(result);
    });
    app.get("/applyVisas/:email", async (req, res) => {
      const email = req.params.email;
      const result = await applyVisas.find({ email: email }).toArray();
      res.send(result);
    });
    app.get("/visas/:id", async (req, res) => {
      const id = req.params.id;

      const result = await visas.findOne({ _id: new ObjectId(id) });
      res.send(result);
    });
    app.get("/visas/email/:email", async (req, res) => {
      const email = req.params.email;

      const result = await visas.find({ userEmail: email }).toArray();
      res.send(result);
    });
    app.get("/visas/count/:count", async (req, res) => {
      const count = parseInt(req.params.count);

      const result = await visas
        .find()
        .sort({ time: -1 })
        .limit(count)
        .toArray();

      res.send(result);
    });

    app.post("/visas", async (req, res) => {
      const userData = req.body;
      const result = await visas.insertOne(userData);
      res.send(result);
    });
    app.post("/feedback", async (req, res) => {
      const userData = req.body;
      const result = await feedback.insertOne(userData);
      res.send(result);
    });
    app.post("/applyVisas", async (req, res) => {
      const userData = req.body;
      const result = await applyVisas.insertOne(userData);
      res.send(result);
    });

    app.patch("/visas/:id", async (req, res) => {
      const userData = req.body;
      const id = req.params.id;
      const result = await visas.updateOne(
        { _id: new ObjectId(id) },
        { $set: userData }
      );
      res.send(result);
    });
    app.delete("/visas/:id", async (req, res) => {
      const id = req.params.id;

      const result = await visas.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });
    app.delete("/applyVisas/:id", async (req, res) => {
      const id = req.params.id;

      const result = await applyVisas.deleteOne({ _id: new ObjectId(id) });
      res.send(result);
    });
  } catch (err) {}
}
run().catch(console.dir);

app.listen(port, () => {});
