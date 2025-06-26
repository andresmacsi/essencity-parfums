// Script para actualizar las rutas de imágenes en products.js
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'js', 'products.js');

// Leer el archivo
let content = fs.readFileSync(productsPath, 'utf8');

// Reemplazar las rutas de imágenes para productos masculinos
content = content.replace(/image: 'images\/products\/([^']*\.jpg)'/g, function(match, p1) {
  if (p1.startsWith('m') || p1.includes('men') || p1.includes('cool-water') || 
      p1.includes('acqua-di-gio') || p1.includes('le-male') || p1.includes('invictus') ||
      p1.includes('boss-bottled') || p1.includes('one-million') || p1.includes('sauvage') ||
      p1.includes('versace-eros') || p1.includes('terre-hermes') || p1.includes('eternity') ||
      p1.includes('polo-blue') || p1.includes('blue-chanel')) {
    return "image: 'images/products/men-placeholder.svg'";
  }
  return match;
});

// Reemplazar las rutas de imágenes para productos femeninos
content = content.replace(/image: 'images\/products\/([^']*\.jpg)'/g, function(match, p1) {
  if (p1.startsWith('w') || p1.includes('women') || p1.includes('coco-mademoiselle') || 
      p1.includes('jadore') || p1.includes('la-vie-est-belle') || p1.includes('good-girl') ||
      p1.includes('black-opium') || p1.includes('daisy') || p1.includes('chance') ||
      p1.includes('miss-dior') || p1.includes('flowerbomb') || p1.includes('si') ||
      p1.includes('bloom') || p1.includes('light-blue')) {
    return "image: 'images/products/D_NQ_NP_2X_623050-MLA80080085336_102024-F.webp";
  }
  return match;
});

// Reemplazar las rutas de imágenes para sets y productos destacados
content = content.replace(/image: 'images\/products\/([^']*\.jpg)'/g, function(match, p1) {
  if (p1.includes('set') || p1.includes('discovery')) {
    return "image: 'images/products/set-placeholder.svg'";
  }
  return match;
});

// Escribir el archivo modificado
fs.writeFileSync(productsPath, content);

console.log('Rutas de imágenes actualizadas correctamente.');
