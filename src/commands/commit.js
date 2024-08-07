const { promptForCommitMessage } = require("../utils/prompts");
const simpleGit = require("simple-git");
const git = simpleGit();

const commitChanges = async () => {
  const message = await promptForCommitMessage();

  try {
    await git.commit(message);
    console.log("Changes committed");
  } catch (err) {
    console.error("Error committing changes:", err);
  }
};

module.exports = { commitChanges };
