// routes/menuRoutes.js

const express = require("express");
const router = express.Router();
const menuController = require("./../Controllers/menuControllers");

router.post("/", menuController.createMenu);
router.get("/", menuController.getAllMenus);
router.get("/:id", menuController.getMenuById);
router.delete("/:id", menuController.deleteMenu);

// 👉 Add new section to existing menu
router.patch("/:id/add-section", menuController.addMenuSection);

// ✅ Add item to existing section like "Recommended"
router.patch("/:id/add-item-to-section", menuController.addItemToSection);

module.exports = router;
