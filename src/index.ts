import dotenv from 'dotenv-safe';

dotenv.config();

import app from './app';
import { database } from './utils/database';

const PORT = process.env.PORT || 3000;

(async () => {
  await database.migrate.latest();

  app.listen(PORT, () =>
    console.info(`🟢🚀 Listening at http://localhost:${PORT}`),
  );
})().catch(err => {
  console.error(err);
  process.exit(1);
});
