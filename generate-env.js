const axios = require('axios');
const fs = require('fs');

const url = 'https://vault.animaeducacao.com.br/v1/qualidade/data/';
const secretPath = 'inspirali/ingressar';

if (process.argv.length < 3) {
    console.log('Usage: node generate-env.js <vault token>');
    process.exit(1);
}

axios({
    method: 'get',
    url: url + secretPath,
    headers: {
        'X-Vault-Token': process.argv.at(2)
    }
}).then(response => {
    const secrets = response.data.data.data;
    fs.writeFile('cypress.env.json', JSON.stringify(secrets), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
});