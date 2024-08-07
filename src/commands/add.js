const { promptForFiles } = require("../utils/prompts");
const simpleGit = require("simple-git");
const git = simpleGit();

const addFiles = async () => {
  const files = await promptForFiles();

  try {
    await git.add(files);
    console.log("Files added to staging area");
  } catch (err) {
    console.error("Error adding files:", err);
  }
};

module.exports = { addFiles };
