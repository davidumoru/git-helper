const simpleGit = require("simple-git");
const git = simpleGit();

const getStatus = async () => {
  try {
    const status = await git.status();
    console.log("Repository Status:");
    console.log(`Current branch: ${status.current}`);
    console.log(`Changes staged for commit: ${status.staged.length}`);
    console.log(`Changes not staged for commit: ${status.notStaged.length}`);
    console.log(`Untracked files: ${status.notAdded.length}`);
  } catch (err) {
    console.error("Error fetching status:", err);
  }
};

module.exports = { getStatus };
