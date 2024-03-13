import db from "../db/db.js";

db.connect()

const table = 'TB_USERS'

export default class UsersModel {
  async read() {
    const { rows } = await db.query(`SELECT * FROM ${table};`)
    return rows
  }

  async create(fiels, values) {
    const insertUser = `
      INSERT INTO
        ${table} (${fiels})
      VALUES
        (${values});
      `

    const { rows } = await db.query(insertUser)

    return rows
  }
}
