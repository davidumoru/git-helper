const simpleGit = require("simple-git");
const inquirer = require("inquirer");
const git = simpleGit();

const mergeBranch = async () => {
  // Get the target branch to merge into
  const { targetBranch } = await inquirer.prompt([
    {
      type: "input",
      name: "targetBranch",
      message: "Enter the target branch to merge into:",
    },
  ]);

  // Get the source branch to merge from
  const { sourceBranch } = await inquirer.prompt([
    {
      type: "input",
      name: "sourceBranch",
      message: "Enter the source branch to merge from:",
    },
  ]);

  try {
    await git.checkout(targetBranch);
    await git.mergeFromTo(sourceBranch, targetBranch);
    console.log(`Merged ${sourceBranch} into ${targetBranch}`);
  } catch (err) {
    if (err.message.includes("CONFLICT")) {
      console.error(
        "Merge conflict detected. Please resolve conflicts manually."
      );
    } else {
      console.error("Error merging branches:", err);
    }
  }
};

module.exports = { mergeBranch };
