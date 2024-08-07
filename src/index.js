const inquirer = require("inquirer");
const {
  initRepo,
  addFiles,
  commitChanges,
  pushChanges,
} = require("./commands");

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
    default:
      console.log("Invalid command");
  }
};

main();
