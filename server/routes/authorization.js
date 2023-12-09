const express = require("express")
var bodyParser = require('body-parser')
const router = express.Router()
// const fetchUser = require("../middlewares/fetchUser")
const User = require("../models/User")  
// const ventureDetails = require("../models/fetchVentures")  
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs") 
// const purchase = require("../models/purchase")
const JWT_Secret = "Mysecretkey";
const mongoose = require("mongoose")
// const JWT_Secret = "Thisisthesecret";
router.use(express.json())
// router.post("/some", async(req,res)=>{
//     return res.json(req.body)
// })
const Seat = mongoose.model('Seat', new mongoose.Schema({
    seatNumber: { type: Number, required: true },
    empty: { type: Boolean, required: true },
    selected: { type: Boolean, required: true, default: false }, // Added selected field
  }));
  
  const Route = mongoose.model('Route', new mongoose.Schema({
    route_name: { type: String, required: true, unique: true },
    seats: {
      Row1: [Seat.schema],
      Row2: [Seat.schema],
      Row3: [Seat.schema],
    },
  }));
  

const bookingSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    middleName: String,
    lastName: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
    },
    collegeEmail: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    parentMobileNumber: {
      type: String,
      required: true,
    },
    selectedYear: {
      type: Number,
      required: true,
    },
    selectedRoute: {
      type: String,
      required: true,
    },
    selectedStop: {
      type: String,
      required: true,
    },
    seatNumber: {
      type: String,
      required: true,
    },
  }, { timestamps: true });
  
  const Booking = mongoose.model('Booking', bookingSchema);

// const Route = mongoose.model('Route', new mongoose.Schema({}), 'routes');
router.post("/signup", async (req, res) => {
        let success = false
        try {
            let user = await User.findOne({ email: req.body.email })
            if (user) {
                return res.status(400).json({ success, message: "Sorry a user with this email already exists" })
            }
            let salt = bcrypt.genSaltSync(10)
            let secPass = bcrypt.hashSync(req.body.password, salt)
            user = await User.create({
                name: req.body.name,  
                email: req.body.email,
                password: secPass
            })
            const data = {
                username: {
                    id: user.id
                }
            }
            let authToken = jwt.sign(data, JWT_Secret)
            success = true
            return res.status(200).json({ success, authToken })
        }
        catch (err) {
            return res.status(500).json({ success, message: err.message })
        }
    })


router.post("/login", async (req, res) => {
    let success = false
    const { email, password } = req.body
    try {
        let user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ success, message: "Incorrect Credentials" })
        }
        const comparePass = bcrypt.compareSync(password, user.password)
        if (!comparePass) {
            return res.status(400).json({ success, message: "Incorrect Credentials" })
        }
        const data = {
            username: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_Secret)
        success = true
        return res.status(200).json({ success, authToken })
    }
    catch (err) {
        return res.status(500).json({ success, message: err.message })
    }
})
router.get("/fetchseats", async (req, res) => {
    try {
        // const route = await routes.find()
        const route = await Route.find()
        return res.status(200).json({ route })

    }
    catch (err) {
        return res.status(500).json({message: err.message })
    }
})
router.post("/booking", async (req, res) => {
    try {
        let token = req.header("auth-token");
        jwt.verify(token, JWT_Secret, async (err, data) => {
            console.log(data)
            if (err) {
                return res.status(401).json({ message: "Invalid token" });
            }
            const objectId = data.username;
            console.log(objectId);

            const r = await Booking.create({
                user_id: objectId.id,
                firstName: req.body.firstName,
                middleName: req.body.middleName,
                lastName: req.body.lastName,
                rollNumber: req.body.rollNumber,
                collegeEmail: req.body.collegeEmail,
                mobileNumber: req.body.mobileNumber,
                parentName: req.body.parentName,
                parentMobileNumber: req.body.parentMobileNumber,
                selectedYear: req.body.selectedYear,
                selectedRoute: req.body.selectedRoute,
                selectedStop: req.body.selectedStop,
                seatNumber: req.body.seatNumber,
            });

            return res.json({ message: "Success" });
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.post("/updateseats", async (req, res) => {
    try {
      const { routeName, seatNumber } = req.body;
      const route = await Route.findOne({ route_name: routeName });
  
      if (!route) {
        return res.status(404).json({ message: "Route not found" });
      }
      // Check the given seatNumber in all three rows and update empty: false
      for (const row of ['Row1', 'Row2', 'Row3']) {
          const seatIndex = route.seats[row].findIndex(seat => Number(seat.seatNumber) === Number(seatNumber));
        //   console.log(route.seats[])
        if (seatIndex !== -1) {
          route.seats[row][seatIndex].empty = false;
          await route.save(); // Save the updated route
          return res.json({ message: "Seat updated successfully" });
        }
      }
  
      return res.status(404).json({ message: "Seat not found" });
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  });
  



module.exports = router