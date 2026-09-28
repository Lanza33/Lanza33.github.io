const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  
  // Flyer mit A5-Format
  const flyers = [
    { input: 'flyer_ars_a5.html', output: 'flyer_ars_a5_IT.pdf' },
    { input: 'flyer_ars_a5_de.html', output: 'flyer_ars_a5_DE.pdf' },
    { input: 'flyer_ars_a5_en.html', output: 'flyer_ars_a5_EN.pdf' },
  ];
  
  for (const file of flyers) {
    const page = await browser.newPage();
    const filePath = path.join(__dirname, file.input);
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle2' });
    
    await page.pdf({
      path: path.join(__dirname, file.output),
      format: 'A5',
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      printBackground: true,
      deviceScaleFactor: 4,
    });
    
    console.log(`Generated: ${file.output}`);
    await page.close();
  }
  
  // Visitenkarte - Front & Back (85mm × 55mm)
  const cards = [
    { input: 'visitenkarte_arno_front.html', output: 'visitenkarte_arno_front.pdf' },
    { input: 'visitenkarte_arno_back.html', output: 'visitenkarte_arno_back.pdf' },
  ];
  
  for (const file of cards) {
    const page = await browser.newPage();
    const filePath = path.join(__dirname, file.input);
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle2' });
    
    await page.pdf({
      path: path.join(__dirname, file.output),
      width: '85mm',
      height: '55mm',
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
      printBackground: true,
      deviceScaleFactor: 4,
    });
    
    console.log(`Generated: ${file.output}`);
    await page.close();
  }
  
  await browser.close();
  console.log('All PDFs generated successfully!');
})();
