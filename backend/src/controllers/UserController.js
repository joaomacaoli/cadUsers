
import UsersModel from "../model/UsersModel.js";

const usersModel = new UsersModel()

export default class UserController {
  constructor() {}

  async read(request, response) {
    const users = await usersModel.read()

    return response.status(200).send(users)
  }

  async create(request, response) {
    const data = request.body

    const dataFields = Object.keys(data)
    const dataValues = Object.values(data)

    const fiels = dataFields.join(', ')
    const values = dataValues.map(value => `'${value}'`).join(', ')

    const result = await usersModel.create(fiels, values)

    return response.status(200).send(result)
  }
}
