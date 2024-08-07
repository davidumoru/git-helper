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
const { mergeBranch } = require("./commands/merge");
const { stashChanges, applyStash } = require("./commands/stash");
const { getStatus } = require("./commands/status");

const main = async () => {
  const { command } = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "What do you want to do?",
      choices: [
        "Init",
        "Add",
        "Commit",
        "Push",
        "Branch",
        "Merge",
        "Stash",
        "Status",
      ],
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
      const { branchAction } = await inquirer.prompt([
        {
          type: "list",
          name: "branchAction",
          message: "What do you want to do with branches?",
          choices: ["Create", "Switch", "Delete"],
        },
      ]);
      if (branchAction === "Create") await createBranch();
      else if (branchAction === "Switch") await switchBranch();
      else if (branchAction === "Delete") await deleteBranch();
      break;
    case "Merge":
      await mergeBranch();
      break;
    case "Stash":
      const { stashAction } = await inquirer.prompt([
        {
          type: "list",
          name: "stashAction",
          message: "What do you want to do with stash?",
          choices: ["Stash Changes", "Apply Stash"],
        },
      ]);
      if (stashAction === "Stash Changes") await stashChanges();
      else if (stashAction === "Apply Stash") await applyStash();
      break;
    case "Status":
      await getStatus();
      break;
    default:
      console.log("Invalid command");
  }
};

main();
