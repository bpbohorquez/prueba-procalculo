const express = require("express");
const router = express.Router();

const { MongoClient, ObjectId } = require("mongodb");

const uri =
  "mongodb+srv://bohorquezbrian71:B9XRqyNmdtSTS1Pj@cluster0.ekat2qp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToCluster() {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log("Connecting to MongoDB Atlas cluster...");
    await mongoClient.connect();
    console.log("Successfully connected to MongoDB Atlas!");

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB Atlas failed!", error);
    process.exit();
  }
}

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signup", async function (req, res, next) {
  let mongoClient;

  const { password, email } = req.body;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("users");
    const collection = db.collection("users");

    const users = await collection.find({ email }).toArray();

    if (users.length > 0) {
      return res.json({ success: false, message: "El usuario ya existe" });
    }

    const userDocument = {
      email,
      password,
    };

    await collection.insertOne(userDocument);
  } finally {
    await mongoClient.close();
  }
  return res.json({ success: true, message: "Usuario creado correctamente" });
});

router.post("/login", async function (req, res, next) {
  let mongoClient;

  const { email, password } = req.body;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("users");
    const collection = db.collection("users");

    const user = await collection.findOne({ email, password });

    if (user) {
      return res.json({
        success: true,
        message: "Sesión iniciada",
        token: user._id,
      });
    } else {
      return res.json({
        success: false,
        message: "Usuario o contraseña incorrectos",
      });
    }
  } finally {
    await mongoClient.close();
  }
});

router.post("/verify", async function (req, res, next) {
  let mongoClient;

  const { token } = req.body;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("users");
    const collection = db.collection("users");

    const user = await collection.findOne({ _id: new ObjectId(token) });

    if (user) {
      return res.json({ success: true });
    } else {
      return res.json({
        success: false,
      });
    }
  } catch (err) {
    return res.json({
      success: false,
    });
  } finally {
    await mongoClient.close();
  }
});

module.exports = router;
