import { drizzle } from 'drizzle-orm/better-sqlite3';
import { postTable } from './schemas';
import Database from 'better-sqlite3';
import { resolve } from 'path';

const sqliteDatabasePath = resolve(process.cwd(), 'db.sqlite3');
const sqlitedatabase = new Database(sqliteDatabasePath);

export const drizzleDb = drizzle(sqlitedatabase, {
  schema: {
    posts: postTable,
  },
  logger: true,
});
