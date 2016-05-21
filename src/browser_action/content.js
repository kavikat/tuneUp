/** tuneUp Chrome Extension**
****@date 03/12/2016
****@author Kavika Tavui
****@email kavikaat@gmail.com
*/
chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(tabs) {
    chrome.tabs.executeScript(null, {file: "src/browser_action/whois.js"}, function(){
        console.log("Script ran!");
    });
});
