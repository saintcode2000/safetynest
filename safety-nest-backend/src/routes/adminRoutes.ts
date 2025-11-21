import { Router } from "express";
import { requireAuth, requireAdmin } from "../middleware/auth";

const router = Router();

router.get("/dashboard", requireAuth, requireAdmin, (req, res) => {
  res.json({
    message: "Welcome Admin",
    user: req.user,
  });
});

export default router;
