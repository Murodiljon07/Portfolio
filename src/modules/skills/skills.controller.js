import mongoose from "mongoose";
import Skill from "../../models/skills.model.js";

export const getSkillsController = async (req, res) => {
  try {
    const skills = await Skill.find();

    res.status(200).json({
      success: true,
      data: skills,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get skills",
    });
  }
};

export const addSkillController = async (req, res) => {
  let body = req.body;

  try {
    const skill = await Skill.create(body);

    res.status(200).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to add skill",
    });
  }
};

export const updateSkillController = async (req, res) => {
  let body = req.body;
  let skillId = req.params.id;

  try {
    const skill = await Skill.findById(skillId);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    skill.set(body);
    await skill.save();

    res.status(200).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update skill",
    });
  }
};

export const deleteSkillController = async (req, res) => {
  let skillId = req.params.id;

  try {
    const skill = await Skill.findById(skillId);

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    await skill.remove();

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete skill",
    });
  }
};
