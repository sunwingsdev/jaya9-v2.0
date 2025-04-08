const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
const { upload, deleteFile } = require("./utils");
const path = require("path");

const usersApi = require("./apis/usersApi/usersApi");
const affiliatesApi = require("./apis/usersApi/affiliateApi");
const depositsApi = require("./apis/depositsApi/depositsApi");
const withdrawsApi = require("./apis/withdrawsApi/withdrawsApi");
const homeControlApi = require("./apis/homeControlApi/homeControlApi");
const promotionApi = require("./apis/promotionApi/promotionApi");
const categoriesApi = require("./apis/categoriesApi/categoriesApi");
const kycApi = require("./apis/kycApi/kycApi");
const pagesApi = require("./apis/pagesApi/pagesApi");
const paymentNumberApi = require("./apis/paymentNumberApi/paymentNumberApi");
const paymentMethodApi = require("./apis/paymentMethodApi/paymentMethodApi");
const referCodeApi = require("./apis/referCodeApi/referCodeApi");
const commissionApi = require("./apis/commissionApi/commissionApi");
const gameApi = require("./apis/gameApi/gameApi");

const corsConfig = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://joya9.oracleapi.net",
    "http://joya9.oracleapi.net",
    "https://www.joya9.oracleapi.net",
    "www.joya9.oracleapi.net",
    "joya9.oracleapi.net",
    "*",
  ],
  credential: true,
  optionSuccessStatus: 200,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
};

//middlewares
app.use(cors(corsConfig));
app.options("", cors(corsConfig));
app.use(express.json());

// mongodb start

const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Serve static files from the "uploads" directory
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes for image upload and delete
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  res.status(200).json({
    message: "File uploaded successfully",
    filePath: `/uploads/images/${req.file.filename}`,
  });
});

app.delete("/delete", async (req, res) => {
  const { filePath } = req.body;

  if (!filePath) {
    return res.status(400).json({ error: "File path not provided" });
  }

  try {
    await deleteFile(filePath);
    res.status(200).json({ message: "File deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //collections start
    const usersCollection = client.db("jaya9").collection("users");
    const depositsCollection = client.db("jaya9").collection("deposits");
    const withdrawsCollection = client.db("jaya9").collection("withdraws");
    const promotionCollection = client.db("jaya9").collection("promotions");
    const categoriesCollection = client.db("jaya9").collection("categories");
    const pagesCollection = client.db("jaya9").collection("pages");
    const homeControlsCollection = client
      .db("jaya9")
      .collection("homeControls");
    const kycCollection = client.db("jaya9").collection("kyc");
    const paymentNumberCollection = client
      .db("jaya9")
      .collection("payment-numbers");
    const paymentMethodCollection = client
      .db("jaya9")
      .collection("payment-methods");
    const referCodesCollection = client.db("jaya9").collection("refer-links");
    const commissionsCollection = client.db("jaya9").collection("commissions");
    const gamesCollection = client.db("jaya9").collection("games");

    //collections end

    // APIs start
    app.use("/users", usersApi(usersCollection, homeControlsCollection));
    app.use("/users", affiliatesApi(usersCollection, homeControlsCollection));
    app.use(
      "/deposits",
      depositsApi(depositsCollection, usersCollection, promotionCollection)
    );
    app.use("/withdraws", withdrawsApi(withdrawsCollection, usersCollection));
    app.use("/home-controls", homeControlApi(homeControlsCollection));
    app.use("/promotions", promotionApi(promotionCollection));
    app.use("/categories", categoriesApi(categoriesCollection));
    app.use("/kyc", kycApi(kycCollection, homeControlsCollection));
    app.use("/pages", pagesApi(pagesCollection));
    app.use("/paymentnumber", paymentNumberApi(paymentNumberCollection));
    app.use("/paymentmethod", paymentMethodApi(paymentMethodCollection));
    app.use("/refer-links", referCodeApi(referCodesCollection));
    app.use("/commissions", commissionApi(commissionsCollection));
    app.use("/games", gameApi(gamesCollection));

    // APIs end

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!!!✅");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// mongodb end

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`Server is running on PORT: ${port}`);
});
