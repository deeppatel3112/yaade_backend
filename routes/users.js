import express from 'express'
const router = express.Router()
import {signin,signup,adminlogin} from '../controllers/user.js'

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/adminlogin",adminlogin);

export default router;