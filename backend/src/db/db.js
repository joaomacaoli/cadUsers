import pg from "pg";

const db = new pg.Client({
  user: 'joaomacaoli',
  host: 'localhost',
  database: 'cadUser',
  password: 'minhasenhasecreta',
  port: 5432
})

export default db
