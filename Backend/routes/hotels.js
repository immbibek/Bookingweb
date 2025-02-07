import express, { Router } from "express"

import { createHotel,updateHotel,deleteHotel,getHotel,getHotels} from "../controllers/hotel.js";
i

const router=express.Router();

// Create 
router.post("/",createHotel)

// UPDATE
router.put("/:id",updateHotel)

// DELETE
router.delete("/:id",deleteHotel)
// GET
router.get("/:id",getHotel)
// GETALL 
router.get("/:id",getHotels)



export default router