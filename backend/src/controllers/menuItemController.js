// import MenuItem from "../models/menuItemModel.js"; // Adjust the path as necessary

// // Create a new menu item
// export const addMenuItem = async (req, res) => {
//   try {
//     const menuItem = new MenuItem(req.body);
//     await menuItem.save();
//     res.status(201).json(menuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get all menu items
// export const getMenuItems = async (req, res) => {
//   try {
//     const menuItems = await MenuItem.find();
//     res.status(200).json(menuItems);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Get a menu item by ID
// export const getMenuItemById = async (req, res) => {
//   try {
//     const menuItem = await MenuItem.findById(req.params.id);
//     if (!menuItem) {
//       return res.status(404).json({ message: "Menu item not found" });
//     }
//     res
//       .status(200)
//       .json({ data: menuItem, message: "Item retirved successfully" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Update a menu item by ID
// export const updateMenuItem = async (req, res) => {
//   try {
//     const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!menuItem) {
//       return res.status(404).json({ message: "Menu item not found" });
//     }
//     res.status(200).json(menuItem);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Delete a menu item by ID
// export const deleteMenuItem = async (req, res) => {
//   try {
//     const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
//     if (!menuItem) {
//       return res.status(404).json({ message: "Menu item not found" });
//     }
//     res.status(200).json({ message: "Menu item deleted successfully" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

import MenuItem from "../models/menuItemModel.js"; // Adjust the path as necessary

// Create a new menu item for the authenticated user
export const addMenuItem = async (req, res) => {
  try {
    const menuItem = new MenuItem({
      ...req.body,
      user: req.user._id, // Associate the menu item with the authenticated user
    });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all menu items (for all users)
export const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().populate("user", "username email");
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all menu items for the authenticated user
export const getUserMenuItems = async (req, res) => {
  console.log("hit", req.user);
  try {
    const menuItems = await MenuItem.find({ user: req.user._id });
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get a menu item by ID (ensure it belongs to the authenticated user)
export const getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findOne({
      _id: req.params.id,
      // user: req.user._id,
    });
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res
      .status(200)
      .json({ data: menuItem, message: "Item retrieved successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a menu item by ID (ensure it belongs to the authenticated user)
export const updateMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a menu item by ID (ensure it belongs to the authenticated user)
export const deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
