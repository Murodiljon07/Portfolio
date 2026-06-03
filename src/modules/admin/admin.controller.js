import mongoose from "mongoose";
import Admin from "../../models/admin.model.js";

export const getAdminController = async (req, res) => {
  try {
    const admin = await Admin.findOne();

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get admin data",
    });
  }
};

export const updateAdminController = async (req, res) => {
  let body = req.body;

  try {
    const admin = await Admin.findOne();

    if (!admin) {
      const newAdmin = await Admin.create(body);

      return res.status(200).json({
        success: true,
        data: newAdmin,
      });
    }

    admin.set(body);
    await admin.save();

    res.status(200).json({
      success: true,
      data: admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update admin data",
    });
  }
};
