import express from 'express';
import {
  register,
  userDetails,
  updateuserdetails
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.get('/getuserdetails',userDetails);
router.put('/updateuserdetails', updateuserdetails);

export default router;