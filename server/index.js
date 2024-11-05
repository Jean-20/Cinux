import {connectBd} from './db.js'
import app from './app.js'

import dotenv from 'dotenv';

dotenv.config();


connectBd();

const port = 3500;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});