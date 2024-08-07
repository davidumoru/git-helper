const simpleGit = require("simple-git");
const git = simpleGit();

const checkRepo = async () => {
  try {
    const status = await git.status();
    if (
      status.notAdded.length === 0 &&
      status.staged.length === 0 &&
      status.files.length === 0
    ) {
      console.log("No changes in the repository.");
      return false;
    }
    return true;
  } catch (err) {
    console.error("Error checking repository:", err);
    return false;
  }
};

const getCurrentBranch = async () => {
  try {
    const { current } = await git.branch();
    return current;
  } catch (err) {
    console.error("Error getting current branch:", err);
    return null;
  }
};

const ensureRepo = async () => {
  try {
    const status = await git.checkIsRepo();
    if (!status) {
      console.error(
        "Not a Git repository. Please initialize a repository first."
      );
      process.exit(1);
    }
  } catch (err) {
    console.error("Error checking if repository:", err);
    process.exit(1);
  }
};

module.exports = { checkRepo, getCurrentBranch, ensureRepo };
