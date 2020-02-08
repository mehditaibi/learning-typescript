import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8"
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

let manUnitesWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitesWins++;
  } else if (match[2] === "Man United" && match[5] == "A") {
    manUnitesWins++;
  }
}

console.log(`Man United won ${manUnitesWins} games.`);
