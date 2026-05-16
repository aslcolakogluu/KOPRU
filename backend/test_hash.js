const bcrypt = require('bcryptjs');
const hash = '$2b$12$R/AOfPALzcnJNTNZu8IAP.E7RuAokA76RMWFv4bmAnNYz9vjeeLtW';
const pass = '123456';
bcrypt.compare(pass, hash).then(res => console.log('Match:', res));
