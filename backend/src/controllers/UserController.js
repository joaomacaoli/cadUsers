
import UsersModel from "../model/UsersModel.js";

const usersModel = new UsersModel()

export default class UserController {
  constructor() { }

  async read(request, response) {
    try {
      const users = await usersModel.read()
      response.status(200).send(users)
    } catch (error) {
      response.status(500).send(error)
    }
  }

  async create(request, response) {
    const data = request.body

    const fiels = Object.keys(data).join(', ')
    const values = Object.values(data).map(value => `'${value}'`).join(', ')

    try {
      const result = await usersModel.create(fiels, values)
      response.status(200).send(result)
    } catch (error) {
      response.status(500).send(error)
    }
  }

  async update(request, response) {
    const data = request.body
    const id = request.params.id

    const values = Object.values(data).map(value => ` = '${value}'`)
    const query = Object.keys(data).map((field, indice) => field + values[indice]).join(', ')

    try {
      const result = await usersModel.update(id, query)
      response.status(200).send(result)
    } catch (error) {
      response.status(500).send(error)
    }
  }

  async delete(request, response) {
    const id = request.params.id

    try {
      const result = await usersModel.delete(id)
      response.status(200).send(result)
    } catch (error) {
      response.status(500).send(error)
    }
  }
}
