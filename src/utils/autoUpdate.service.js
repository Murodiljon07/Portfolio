import mongoose from "mongoose";
import Admin from "../models/admin.model.js";

export const updateAge = async (date, currentAge) => {
  if (!date || !currentAge) {
    return;
  }

  const nowDate = new Date();

  const thisYear = nowDate.getFullYear();
  const thisMonth = nowDate.getMonth();
  const today = nowDate.getDay();

  if (date.month === thisMonth && date.day === today) {
    const updateAge = currentAge + 1;
    await Admin.findOneAndUpdate({ age: updateAge });
  }
};
