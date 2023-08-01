const router = require("express").Router();
const Customer = require("../models/Customer");
const auth = require("../middleware/auth");

router.post("/", auth, async (req, res) => {
  try {
    const { name } = req.body;

    const newCustomer = new Customer({
      name,
    });

    const savedCustomer = await newCustomer.save();

    // console.log("user",req.user)
    // prints logged in user _id

    res.json(savedCustomer);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;