import { neon } from '@neondatabase/serverless';

let sql;

function getSQL() {
  if (!sql) {
    sql = neon(process.env.DATABASE_URL);
  }
  return sql;
}

export default getSQL;
