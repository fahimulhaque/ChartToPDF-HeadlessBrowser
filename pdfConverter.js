const puppeteer = require('puppeteer');

async function convert_html_string_to_pdf(fileLocation) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.on('requestfailed', request => {
    })
    page.on('requestfinished', request => {
        resp = request.response()
    })

   
    await page.goto(fileLocation, {waitUntil: 'networkidle0'});
   /* await page.goto('http://localhost:8080/', {waitUntil: 'networkidle0'}); */
    
    await page.pdf({
        path: 'index.pdf', format: 'A4', printBackground: true, displayHeaderFooter: true,
        margin: {
            bottom: "50px"
          }
       });
    console.log("File has been saved as mentioned path.")
    await browser.close()
}


exports.convert_html_string_to_pdf = convert_html_string_to_pdf;