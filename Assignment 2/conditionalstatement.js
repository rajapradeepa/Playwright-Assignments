function launchBrowser (browserName)
{
    if (browserName==="Chrome")
    {
        console.log("The browser opened is Chrome");
    }
    else
    {
        console.log("The browser name is unknown");
    }
}
function runTests (testType)
{
    switch (testType) {
        case "sanity":
            console.log("The test type identified is Sanity");
            break;
        case "regression":
            console.log("The test type identified is Regression");
            break;
        default:
            console.log("The test type identified is Smoke");
            break;
    }
}

launchBrowser("Chrome");
launchBrowser("Firefox");
runTests("smoke");
runTests("regression");

