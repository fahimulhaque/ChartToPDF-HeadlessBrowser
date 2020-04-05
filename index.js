const tmp = require('tmp');
const pdfConverter = require('./pdfConverter');
function htmlToPdf() {
  (async () => {
    try {
      const htmlFileLoc = 'file:///Users/fahimulhaque/Desktop/browserlessExample/index.html';
      await pdfConverter.convert_html_string_to_pdf(htmlFileLoc);
    } catch (err) {
      console.log("Error processing request: " + err);
    }
  })()
}
htmlToPdf();