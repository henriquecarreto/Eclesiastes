import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import { createCanvas } from '@napi-rs/canvas';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const pdfPath = 'C:\\Users\\henri\\Downloads\\Ebook - Eclesiastes.pdf';
const outputDir = path.resolve('public/images');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const targetPages = [1, 2, 4, 5, 7, 8, 11, 19, 23, 31, 35, 47, 49, 50];

async function convert() {
  console.log('Loading PDF...');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const loadingTask = pdfjsLib.getDocument({ data });
  const pdfDoc = await loadingTask.promise;
  console.log(`PDF loaded. Total pages: ${pdfDoc.numPages}`);

  for (const pageNum of targetPages) {
    if (pageNum > pdfDoc.numPages) continue;
    try {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: 2.0 }); // 2x scale for crisp quality
      
      const canvas = createCanvas(viewport.width, viewport.height);
      const context = canvas.getContext('2d');

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };

      await page.render(renderContext).promise;

      const buffer = canvas.toBuffer('image/png');
      const fileName = `page-${pageNum}.webp`;
      const outputPath = path.join(outputDir, fileName);

      await sharp(buffer)
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`Successfully generated ${fileName} (${Math.round(viewport.width)}x${Math.round(viewport.height)})`);
    } catch (err) {
      console.error(`Error rendering page ${pageNum}:`, err);
    }
  }

  console.log('All PDF pages converted successfully!');
}

convert().catch(console.error);
