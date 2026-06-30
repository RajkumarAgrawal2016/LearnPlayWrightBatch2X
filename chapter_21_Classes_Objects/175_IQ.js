class Browser{
        constructor(name){
            this.name= name;
            this.isopen = true;
            console.log(name + "Browser launched");
        }
        startBrowser(){
            console.log("Starting the browser");
        }
        closeBrowser(){
            console.log("Closing the browser");
        }
}
const chrome = new Browser("Chrome");
const firefox = new Browser("Firefox");
chrome.startBrowser();
chrome.closeBrowser();
firefox.startBrowser();
firefox.closeBrowser();

console.log(chrome.isopen);
