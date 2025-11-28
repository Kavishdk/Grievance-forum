const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });
const fs = require('fs');

const output = `
EMAIL_USER=${process.env.EMAIL_USER}
EMAIL_PASS=${process.env.EMAIL_PASS ? '******' : 'undefined'}
ADMIN_EMAIL=${process.env.ADMIN_EMAIL}
`;

fs.writeFileSync('env_check.txt', output);
console.log('Check complete');
