import { Pool } from "pg";

const pool = new Pool({
  host: "",
  database: "",
  password: "",
  port: +"",
  user: "",
});

export const db = {
  query: (text: string, params: any[] ) => {
    return pool.query(text, params);
  },
};
