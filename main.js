const puppeteer = require('puppeteer');

(async () => {
  console.log('Starting Chrome with Puppeteer...');

  await puppeteer.launch({
    headless: false, // brings up the browser chrome
    userDataDir: null, // null: to use a temporary profile (clean session, no SSO, you will be prompted for certificates and credentials)

    // BEWARE: disabling the sandbox might be a dumb idea!
    //         I don't need this for support uses cases, but mainly for my headless and container experiments.
    //         It allows you to get around the sandbox security, e.g. if you want to run this in a docker container.
    // Options:
    //         "--no-sandbox disables" disables the sandbox (duh)
    //         "--disable-setuid-sandbox" allows you to run the chrome_sandbox binary regardless of file permissions
    // args: [
    //  '--no-sandbox',
    //  '--disable-setuid-sandbox'
    // ]
  });

  console.log('Chrome started!');

  // if you want to navigate to a specific URL
  // const page = await browser.newPage();
  // await page.goto('https://www.google.com');

  // browser is kept open for debugging
  // await browser.close();
})();