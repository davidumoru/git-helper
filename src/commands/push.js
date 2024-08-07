const simpleGit = require("simple-git");
const git = simpleGit();

const pushChanges = async () => {
  try {
    await git.push();
    console.log("Changes pushed to remote repository");
  } catch (err) {
    console.error("Error pushing changes:", err);
  }
};

module.exports = { pushChanges };
