const { mergeHTMLReports } = require("playwright-merge-html-reports");

const inputReportPaths = [
    process.cwd() + "/report1",
    process.cwd() + "/report2"
  ];
  
  const config = {
    outputFolderName: "merged-html-report", // default value
    outputBasePath: process.cwd() // default value
  }
  
  mergeHTMLReports(inputReportPaths, config)