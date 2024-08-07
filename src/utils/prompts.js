const inquirer = require("inquirer");

const promptForBranchName = async (message) => {
  const { branchName } = await inquirer.prompt([
    {
      type: "input",
      name: "branchName",
      message: message,
    },
  ]);
  return branchName;
};

const promptForCommitMessage = async () => {
  const { message } = await inquirer.prompt([
    {
      type: "input",
      name: "message",
      message: "Enter the commit message:",
    },
  ]);
  return message;
};

const promptForFiles = async () => {
  const { files } = await inquirer.prompt([
    {
      type: "input",
      name: "files",
      message: "Enter the files to add (comma separated):",
    },
  ]);
  return files.split(",");
};

const promptForAction = async (message, choices) => {
  const { action } = await inquirer.prompt([
    {
      type: "list",
      name: "action",
      message: message,
      choices: choices,
    },
  ]);
  return action;
};

module.exports = {
  promptForBranchName,
  promptForCommitMessage,
  promptForFiles,
  promptForAction,
};
