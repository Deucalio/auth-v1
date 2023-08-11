const router = require("express").Router();
const Offer = require("../models/Offer");
const User = require("../models/User");
const auth = require("../middleware/auth");

// post an offer
router.post("/", auth, async (req, res) => {
  try {
    const userId = req.user;
    const { product, description, quantity, targetPrice } = req.body;

    // add to offer schema
    const newOffer = new Offer({
      user: userId,
      product,
      description,
      quantity,
      targetPrice,
    });
    const user = await User.findById(req.user);

    // append to user schema offers
    user.offers.push(newOffer);

    await user.save();
    await newOffer.save();

    res.json({ user, newOffer });

    // res.json({user, product, description, quantity, targetPrice});
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// get all offers
router.get("/", async (req, res) => {
  try {
    const offers = await Offer.find().populate("user");
    res.json(offers);
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
