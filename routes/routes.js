const express = require("express");
// const Model = require("../schema/model");
const Appointments = require("../models/appointments");
const Users = require("../models/users.js");
const router = express.Router();
module.exports = router;

//Post Method
router.post("/post", async (req, res) => {
  // res.send("Post API");
  const data = new Model({
    number: req.body.number,
    available: true,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all appointments
// router.get("/appointments", async (req, res) => {
//   // res.send("Get All API");
//   try {
//     const data = await Appointments.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
//Get all users
router.get("/users", async (req, res) => {
  try {
    const data = await Users.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
router.get("/getOne/:id", async (req, res) => {
  // res.send(req.params.id);
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  // res.send("Update by ID API");
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };
    // const result = await Model.findByIdAndUpdate(id, updatedData);
    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});
