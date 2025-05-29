//Create and call two JavaScript functions: `launchBrowser` with `if-else` for browser launch messages, 
// and `runTests` with `switch` for test type messages.

function launchbrowser(browserName) {
    if(browserName === 'chrome'){
        console.log("Selected browser is Chrome");
    } else if (browserName === 'edge'){
         console.log("Selected browser is Edge");
    } else if (browserName === 'firefox'){
         console.log("Selected browser is Firefox");
    } else {
        console.log("Unsupported browser");        
    }    
}
function runTests(testType) {
    switch (testType) {
        case 'smoke':
            console.log("Selected is Smoke testing");            
            break;
        case 'regression':
            console.log("Selected is Regression testing");            
            break;
        case 'sanity':
            console.log("Selected is sanity testing");            
            break;    
        default:
            console.log("Unsupported testing"); 
            break;
    }
    
}
launchbrowser('firefox');
runTests('sit');