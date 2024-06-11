import express from "express";
import emojis from "./emojis.mjs";
import users from "./users.mjs";

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/users', users);

export default router;
