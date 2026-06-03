import Projects from "../../models/projects.model.js";

export const getProjectService = async () => {
  const projects = await Projects.find();

  return projects;
};

export const addProjectService = async (body) => {
  if (!body) {
    throw new Error("Project model incorrect");
  }

  const project = await Projects.create(body);

  return project;
};

export const updateProjectService = async (id, data) => {
  try {
    const project = await Projects.findByIdAndUpdate(id, data);

    return project;
  } catch (error) {
    return error;
  }
};

export const deleteProjectService = async (id) => {
  return await Projects.findByIdAndDelete(id);
};
