import db from "../db/db.js";

db.connect()

const table = 'TB_USERS'

export default class UsersModel {
  async read() {
    const { rows } = await db.query(`SELECT * FROM ${table};`)
    return rows
  }

  async create(fields, values) {
    const insertUserQuery = `
      INSERT INTO
        ${table} (${fields})
      VALUES
        (${values});
      `

    const { rows } = await db.query(insertUserQuery)
    return rows
  }

  async update(id, query) {
    const updateUserQuery = `
    UPDATE
      ${table}
    SET
      ${query}
    WHERE
      ID = '${id}';
    `

  const { rows } = await db.query(updateUserQuery)
  return rows
  }

  async delete(id) {
    const deleteUserQuery = `
      DELETE FROM
        ${table}
      WHERE
        ID = '${id}';
    `

  const { rows } = await db.query(deleteUserQuery)
  return rows
  }
}
