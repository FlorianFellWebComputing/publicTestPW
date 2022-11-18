const { mergeHTMLReports } = require("playwright-merge-html-reports");

const inputReportPaths = [
    process.cwd() + "/reports1",
    process.cwd() + "/reports2"
  ];
  
  const config = {
    outputFolderName: "merged-html-report", // default value
    outputBasePath: process.cwd() // default value
  }
  
  mergeHTMLReports(inputReportPaths, config)