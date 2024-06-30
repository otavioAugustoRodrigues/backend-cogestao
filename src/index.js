const dotenv = require('dotenv');
const app = require('./App');
const startDB = require('./Config/mongodb');

dotenv.config();
startDB();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log('Servidor Rodando'));
