import db from "../db/db.js";

let context = db.connect()

const table = 'TB_USERS'

export default class UsersModel {
  async read() {
    const { rows } = await db.query(`SELECT * FROM ${table};`)
    return rows
  }

  async create(fiels, values) {
    try {
      const insertUser = `
      INSERT INTO
        ${table} (${fiels})
      VALUES
        (${values});
      `

      return await db.query(insertUser)
    } catch (error) {
      console.log(error);
    }
  }
}
