const { mergeHTMLReports } = require("playwright-merge-html-reports");

let inputReportPaths = [];

for(let i = 1; i <= process.argv[2]; i++) {
  inputReportPaths.push(process.cwd() + "/shardReports/report" + i);
} 

const config = {
  outputFolderName: "merged-html-report", // default value
  outputBasePath: process.cwd() // default value
}
  
mergeHTMLReports(inputReportPaths, config)