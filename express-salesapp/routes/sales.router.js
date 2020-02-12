const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("../lib/isLoggedMiddleware");
const { asyncController } = require("../lib/asyncControler");
const User = require("../models/User");
const Ventas = require("../models/Ventas");
const _ = require("lodash");

// Get the sales as json data for the chart.js to represent it
router.get(
  "/",
  asyncController(
    async (req, res, next) => {
      const users = await User.aggregate([
        {
          $lookup: {
            from: "ventas",
            localField: "_id",
            foreignField: "user",
            as: "ventas"
          }
        },
        { $unwind: "$ventas" },
        {
          $group: {
            _id: "$username",
            TotalBalance: {
              $sum: "$ventas.quantity"
            }
          }
        }
      ]);
      console.log(users);

      //const datapoints = users.map(user => 5);
      // const sales = await Promise.all(
      //   users
      //     .map(user => user.id)
      //     .map(user_id => {
      //       return Ventas.find({ user: user_id }).then(ventas => {
      //         return _.sum(ventas.map(v => v.quantity));
      //       });
      //     })
      // );
      // console.log(sales);

      const labels = users.map(user => user._id);
      const datapoints = users.map(user => user.TotalBalance);

      const data = {
        labels,
        datapoints
      };

      res.json(data);
    },
    { json: true }
  )
);

// Add sale to current user
router.get(
  "/addsale/:quantity",
  isLoggedIn(null, true),
  asyncController(async (req, res, next) => {
    const { quantity } = req.params;

    // Create a new venta for current logged in user
    const venta = await Ventas.create({
      user: req.user._id,
      quantity
    });
    return res.json(venta);
  })
);

module.exports = router;
