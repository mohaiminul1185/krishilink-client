const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const {
  MongoClient,
  ServerApiVersion,
  ObjectId,
} = require("mongodb");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// mongodb uri
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// mongodb client
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // database
    const database = client.db("krishiLinkDB");

    // collection
    const cropsCollection =
      database.collection("crops");

    // ==========================
    // GET ALL CROPS
    // ==========================

    app.get("/crops", async (req, res) => {
      const search = req.query.search || "";

      const query = {
        name: {
          $regex: search,
          $options: "i",
        },
      };

      const result = await cropsCollection
        .find(query)
        .toArray();

      res.send(result);
    });

    // ==========================
    // GET LATEST CROPS
    // ==========================

    app.get(
      "/latest-crops",
      async (req, res) => {
        const result = await cropsCollection
          .find()
          .sort({ _id: -1 })
          .limit(6)
          .toArray();

        res.send(result);
      }
    );

    // ==========================
    // GET SINGLE CROP
    // ==========================

    app.get("/crops/:id", async (req, res) => {
      const id = req.params.id;

      const result =
        await cropsCollection.findOne({
          _id: new ObjectId(id),
        });

      res.send(result);
    });

    // ==========================
    // ADD CROP
    // ==========================

    app.post("/crops", async (req, res) => {
      const crop = req.body;

      const result =
        await cropsCollection.insertOne(crop);

      res.send(result);
    });

    // ==========================
    // UPDATE CROP
    // ==========================

    app.put("/crops/:id", async (req, res) => {
      const id = req.params.id;

      const updatedCrop = req.body;

      const result =
        await cropsCollection.updateOne(
          { _id: new ObjectId(id) },
          {
            $set: updatedCrop,
          }
        );

      res.send(result);
    });

    // ==========================
    // DELETE CROP
    // ==========================

    app.delete(
      "/crops/:id",
      async (req, res) => {
        const id = req.params.id;

        const result =
          await cropsCollection.deleteOne({
            _id: new ObjectId(id),
          });

        res.send(result);
      }
    );

    // ==========================
    // ADD INTEREST
    // ==========================

    app.patch(
      "/crops/interests/:id",
      async (req, res) => {
        const id = req.params.id;

        const interest = req.body;

        const crop =
          await cropsCollection.findOne({
            _id: new ObjectId(id),
          });

        // duplicate check

        const alreadyExists =
          crop?.interests?.find(
            (item) =>
              item.userEmail ===
              interest.userEmail
          );

        if (alreadyExists) {
          return res.send({
            message:
              "You already sent interest",
          });
        }

        // interest id

        const interestId = new ObjectId();

        const newInterest = {
          _id: interestId,
          ...interest,
          status: "pending",
        };

        const result =
          await cropsCollection.updateOne(
            { _id: new ObjectId(id) },
            {
              $push: {
                interests: newInterest,
              },
            }
          );

        res.send(result);
      }
    );

    // ==========================
    // MY POSTS
    // ==========================

    app.get("/my-posts", async (req, res) => {
      const email = req.query.email;

      const result =
        await cropsCollection
          .find({
            "owner.ownerEmail": email,
          })
          .toArray();

      res.send(result);
    });

    // ==========================
    // MY INTERESTS
    // ==========================

    app.get(
      "/my-interests",
      async (req, res) => {
        const email = req.query.email;

        const crops =
          await cropsCollection
            .find()
            .toArray();

        let interests = [];

        crops.forEach((crop) => {
          const matched =
            crop.interests?.filter(
              (item) =>
                item.userEmail === email
            );

          matched?.forEach((item) => {
            interests.push({
              cropId: crop._id,
              cropName: crop.name,
              ownerName:
                crop.owner.ownerName,
              quantity: item.quantity,
              message: item.message,
              status: item.status,
            });
          });
        });

        res.send(interests);
      }
    );

    console.log(
      "MongoDB Connected Successfully"
    );
  } finally {
  }
}

run().catch(console.dir);

// root route
app.get("/", (req, res) => {
  res.send("KrishiLink Server Running");
});

// server listen
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});