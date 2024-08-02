const fs = require("fs");
const path = require("path");
const { program } = require("commander");

program
  .option("-d, --directory <type>", "Directory to rename files in")
  .option("-p, --prefix <type>", "Prefix for the new filenames");

program.parse(process.argv);

const options = program.opts();

if (!options.directory || !options.prefix) {
  console.error("Directory and prefix are required");
  process.exit(1);
}

fs.readdir(options.directory, (err, files) => {
  if (err) {
    console.error("Error reading directory:", err.message);
    process.exit(1);
  }

  files.forEach((file, index) => {
    const oldPath = path.join(options.directory, file);
    const newPath = path.join(
      options.directory,
      `${options.prefix}${index}${path.extname(file)}`
    );

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.error("Error renaming file:", err.message);
      } else {
        console.log(`Renamed ${oldPath} to ${newPath}`);
      }
    });
  });
});
