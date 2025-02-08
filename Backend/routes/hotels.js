import express, { Router } from "express"

import { createHotel,updateHotel,deleteHotel,getHotel,getHotels} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";


const router=express.Router();

// Create 
router.post("/",verifyAdmin,createHotel)

// UPDATE
router.put("/:id",verifyAdmin,updateHotel)

// DELETE
router.delete("/:id",verifyAdmin,deleteHotel)
// GET
router.get("/:id",getHotel)
// GETALL 
router.get("/:id",getHotels)



export default router