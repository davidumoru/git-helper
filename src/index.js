const inquirer = require("inquirer");
const {
  initRepo,
  addFiles,
  commitChanges,
  pushChanges,
} = require("./commands");
const {
  createBranch,
  switchBranch,
  deleteBranch,
} = require("./commands/branch");

const main = async () => {
  const { command } = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "What do you want to do?",
      choices: ["Init", "Add", "Commit", "Push", "Branch", "Merge", "Status"],
    },
  ]);

  switch (command) {
    case "Init":
      await initRepo();
      break;
    case "Add":
      await addFiles();
      break;
    case "Commit":
      await commitChanges();
      break;
    case "Push":
      await pushChanges();
      break;
    case "Branch":
      const { action } = await inquirer.prompt([
        {
          type: "list",
          name: "action",
          message: "What do you want to do with branches?",
          choices: ["Create", "Switch", "Delete"],
        },
      ]);
      if (action === "Create") await createBranch();
      else if (action === "Switch") await switchBranch();
      else if (action === "Delete") await deleteBranch();
      break;
    default:
      console.log("Invalid command");
  }
};

main();
