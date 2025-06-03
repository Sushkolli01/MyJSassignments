import {chromium, firefox, test} from "@playwright/test";
import { channel } from "diagnostics_channel";

test("Launch Redbus and Flipkart", async () => {
    
    // launch flipkart browser using edge
    const browserredbus = await chromium.launch({channel:"msedge"});
    const contextredbus = await browserredbus.newContext();
    const pageredbus = await contextredbus.newPage();
    await pageredbus.goto("https://www.redbus.in/");
    const urlredbus =  pageredbus.url();
    const titleredbus = await pageredbus.title();

    console.log(`Flipkart URL is ${urlredbus}`);
    console.log(`Flipkart title is ${titleredbus}`);

    // launch redbus browser using firefox
    const browserflipkart = await firefox.launch();
    const contextflipkart = await browserflipkart.newContext();
    const pageflipkart = await contextflipkart.newPage();
    await pageflipkart.goto("https://www.flipkart.com/");
    const urlflipkart =  pageflipkart.url();
    const titleflipkart = await pageflipkart.title();

    console.log(`Flipkart URL is ${urlflipkart}`);
    console.log(`Flipkart title is ${titleflipkart}`);

});


