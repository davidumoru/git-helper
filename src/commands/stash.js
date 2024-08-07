const simpleGit = require("simple-git");
const inquirer = require("inquirer");
const git = simpleGit();

const stashChanges = async () => {
  try {
    await git.stash();
    console.log("Changes stashed");
  } catch (err) {
    console.error("Error stashing changes:", err);
  }
};

const applyStash = async () => {
  try {
    await git.stashPop();
    console.log("Stash applied");
  } catch (err) {
    console.error("Error applying stash:", err);
  }
};

module.exports = { stashChanges, applyStash };
