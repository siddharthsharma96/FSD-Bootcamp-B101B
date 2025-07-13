// controllers/menuController.js

const Menu = require("./../Model/menuModel");

// Create Menu
exports.createMenu = async (req, res) => {
  try {
    const menu = await Menu.create(req.body);
    res.status(201).json({
      status: "success",
      data: menu,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Get All Menus
exports.getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json({
      status: "success",
      length: menus.length,
      data: menus,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};

// Get Menu by ID
exports.getMenuById = async (req, res) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res
        .status(404)
        .json({ status: "fail", message: "Menu not found" });
    }
    res.status(200).json({ status: "success", data: menu });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

// Delete Menu by ID
exports.deleteMenu = async (req, res) => {
  try {
    const deleted = await Menu.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res
        .status(404)
        .json({ status: "fail", message: "Menu not found" });
    }
    res
      .status(200)
      .json({ status: "success", message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

// Add a new section to a specific menu
exports.addMenuSection = async (req, res) => {
  const { newSection } = req.body;

  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      { $push: { menuSections: newSection } },
      { new: true }
    );

    if (!updatedMenu) {
      return res
        .status(404)
        .json({ status: "fail", message: "Menu not found" });
    }

    res.status(200).json({
      status: "success",
      data: updatedMenu,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};

// Add a new item to an existing section (e.g., "Recommended")
exports.addItemToSection = async (req, res) => {
  const { sectionTitle, newItem } = req.body;

  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res
        .status(404)
        .json({ status: "fail", message: "Menu not found" });
    }

    const section = menu.menuSections.find((sec) => sec.title === sectionTitle);
    if (!section) {
      return res
        .status(404)
        .json({ status: "fail", message: "Section not found" });
    }

    section.itemCards.push(newItem);
    await menu.save();

    res.status(200).json({
      status: "success",
      data: menu,
    });
  } catch (error) {
    res.status(500).json({ status: "fail", message: error.message });
  }
};
