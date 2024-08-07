const { promptForBranchName, promptForAction } = require("../utils/prompts");
const simpleGit = require("simple-git");
const git = simpleGit();

const createBranch = async () => {
  const branchName = await promptForBranchName("Enter the branch name:");

  try {
    await git.branch([branchName]);
    console.log(`Branch ${branchName} created`);
  } catch (err) {
    console.error("Error creating branch:", err);
  }
};

const switchBranch = async () => {
  const branchName = await promptForBranchName(
    "Enter the branch name to switch to:"
  );

  try {
    await git.checkout(branchName);
    console.log(`Switched to branch ${branchName}`);
  } catch (err) {
    console.error("Error switching branch:", err);
  }
};

const deleteBranch = async () => {
  const branchName = await promptForBranchName(
    "Enter the branch name to delete:"
  );

  try {
    await git.branch(["-d", branchName]);
    console.log(`Branch ${branchName} deleted`);
  } catch (err) {
    console.error("Error deleting branch:", err);
  }
};

module.exports = { createBranch, switchBranch, deleteBranch };
