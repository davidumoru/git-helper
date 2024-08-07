const simpleGit = require("simple-git");
const inquirer = require("inquirer");
const git = simpleGit();

const commitChanges = async () => {
  const { message } = await inquirer.prompt([
    {
      type: "input",
      name: "message",
      message: "Enter the commit message:",
    },
  ]);

  try {
    await git.commit(message);
    console.log("Changes committed");
  } catch (err) {
    console.error("Error committing changes:", err);
  }
};

module.exports = { commitChanges };
