


const fs = require('node:fs');
const path = require('path');

const checkoutModulePath = path.resolve(__dirname, '../cartmobile/checkout.mjs');

// Read the existing content of the module
let moduleContent = fs.readFileSync(checkoutModulePath, 'utf-8');