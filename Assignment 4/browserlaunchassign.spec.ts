import {test,firefox,webkit} from "@playwright/test"

//to start your test script should start with test()
test("Test to Open Redbus in Edge and Flipkart in Webkit",async()=>{
    const redbusbrowser = await firefox.launch({headless:false});
    const redbuscontext = await redbusbrowser.newContext();
    const redbuspage = await redbuscontext.newPage();
    await redbuspage.goto(`https://www.redbus.in/`);
    console.log(`The title of the page is ${await redbuspage.title()}`);
    console.log(`The URL of the current page is ${await redbuspage.url()}`); 
    
    const webkitbrowser = await webkit.launch({headless:false});
    const webkitcontext = await webkitbrowser.newContext();
    const webkitpage = await webkitcontext.newPage();
    await webkitpage.goto(`https://www.flipkart.com/`);
    console.log(`The title of the page is ${await webkitpage.title()}`);
    console.log(`The URL of the current page is ${await webkitpage.url()}`);   
})