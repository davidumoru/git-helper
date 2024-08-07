const simpleGit = require("simple-git");
const inquirer = require("inquirer");
const git = simpleGit();

const addFiles = async () => {
  const { files } = await inquirer.prompt([
    {
      type: "input",
      name: "files",
      message: "Enter the files to add (comma separated):",
    },
  ]);

  try {
    await git.add(files.split(","));
    console.log("Files added to staging area");
  } catch (err) {
    console.error("Error adding files:", err);
  }
};

module.exports = { addFiles };
