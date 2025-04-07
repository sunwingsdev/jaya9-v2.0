const express = require("express");
const { ObjectId } = require("mongodb");

const categoriesApi = (categoriesCollection) => {
  const router = express.Router();

  // Add a category data
  router.post("/", async (req, res) => {
    const categoryInfo = req.body;
    categoryInfo.createdAt = new Date();
    categoryInfo.isSelected = false;
    const result = await categoriesCollection.insertOne(categoryInfo);
    res.send(result);
  });

  // Get all category data
  router.get("/", async (req, res) => {
    const result = await categoriesCollection.find().toArray();
    res.send(result);
  });
  // TODO category update not set yet
  // update a category
  router.patch("/:id", async (req, res) => {
    const { id } = req.params;

    console.log(id);
  });

  // delete a category
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const query = { _id: new ObjectId(id) };
    const result = await categoriesCollection.deleteOne(query);
    res.send(result);
  });

  return router;
};

module.exports = categoriesApi;
