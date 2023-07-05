import { Pool } from "pg";

const { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } = process.env;

const pool = new Pool({
  host: PGDATABASE,
  database: PGHOST,
  password: PGPASSWORD,
  port: +PGPORT!,
  user: PGUSER,
});

export const db = {
  query: (text: string, params: any[]) => {
    return pool.query(text, params);
  },
};
