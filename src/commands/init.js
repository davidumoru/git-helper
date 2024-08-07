const simpleGit = require("simple-git");
const git = simpleGit();

const initRepo = async () => {
  try {
    await git.init();
    console.log("Initialized empty Git repository");
  } catch (err) {
    console.error("Error initializing repository:", err);
  }
};

module.exports = { initRepo };
