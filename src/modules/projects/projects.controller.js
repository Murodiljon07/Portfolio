import {
  addProjectService,
  getProjectService,
  updateProjectService,
  deleteProjectService,
} from "./projects.service.js";

export const getProjectsController = async (req, res) => {
  const projects = await getProjectService();

  if (!projects) {
    throw new Error("Can't get Projects");
  }

  res.json({ msg: "succes", projects });
};

export const addProjectController = async (req, res) => {
  const body = req.body;

  try {
    const project = await addProjectService(body);

    if (!project) {
      throw new Error("Project not added");
    }

    res.json({ msg: "Project added", project });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const updateProjectController = async (req, res) => {
  const id = req.params;
  const data = req.body;

  try {
    const project = updateProjectService(id, data);

    res.json({ msg: "Project updated", project });
  } catch (error) {
    res.json({ msg: error });
  }
};

export const deleteProjectController = async (req, res) => {
  const id = req.params;

  try {
    await deleteProjectService(id);
    res.json({ msg: "Project deleted" });
  } catch (error) {
    res.json({ msg: "Can't delete project", error });
  }
};
