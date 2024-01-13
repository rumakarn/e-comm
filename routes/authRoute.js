import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();
//separate file routing requires router object

//routing
//register-method:POST

router.post("/register", registerController);

//login-method:POST

router.post("/login", loginController);

//test
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
