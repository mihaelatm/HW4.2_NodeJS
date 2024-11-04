import fs from "fs";
import "dotenv/config";

const fileName = process.env.fileName;
const content = "This is an example of text to write to a file.";

fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.log("Error writing file: ", err);
    return;
  }

  console.log("File written successfully");

  fs.readFile(fileName, "utf-8", (err, content) => {
    if (err) {
      console.log("Error reading file: ", err);
      return;
    }

    console.log("File content: ", content);
  });
});
