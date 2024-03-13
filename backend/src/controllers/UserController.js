
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

    const dataFields = Object.keys(data)
    const dataValues = Object.values(data)

    const fiels = dataFields.join(', ')
    const values = dataValues.map(value => `'${value}'`).join(', ')

    try {
      const result = await usersModel.create(fiels, values)
      response.status(200).send(result)
    } catch (error) {
      response.status(500).send(error)
    }
  }
}
