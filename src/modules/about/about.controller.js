import fs from "fs";

export const getMeController = async (req, res) => {
  fs.readFile("./src/about/about.json", "utf-8", (err, data) => {
    if (err) throw new Error(err);
    let me = JSON.parse(data);

    res.json({ me });
  });
};

export const updateMeController = async (req, res) => {
  let body;
};
