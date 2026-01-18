
import { Router } from "express";
const router = Router();
router.get("/me", (req,res)=>res.json({ok:true}));
export const authRoutes = router;
