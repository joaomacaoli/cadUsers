
import UsersModel from "../model/UsersModel.js";

const usersModel = new UsersModel()

async function validateUserExists(id) {
  const userExists = await usersModel.readById(id);
  if (!userExists) {
    throw new Error('User not found!')
  }
}

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

  async readById(request, response) {
    try {
      const id = request.params.id
      await validateUserExists(id)

      const user = await usersModel.readById(id);
      response.status(200).send(user);
    } catch (error) {
      response.status(404).send({ error: error.message });
    }
  };

  async create(request, response) {
    const { name, email, phone, latitude, longitude } = request.body

    if (!name || !email || !phone || !latitude || !longitude) {
      return response.status(400).json({ error: "Missing fields!" })
    }

    try {
      const data = request.body

      const fiels = Object.keys(data).join(', ')
      const values = Object.values(data).map(value => `'${value}'`).join(', ')

      const result = await usersModel.create(fiels, values)
      response.status(200).send(result)
    } catch (error) {
      response.status(500).send(error)
    }
  }

  async update(request, response) {
    try {
      const id = request.params.id
      await validateUserExists(id)

      const data = request.body
      const values = Object.values(data).map(value => ` = '${value}'`)
      const query = Object.keys(data).map((field, indice) => field + values[indice]).join(', ')

      const result = await usersModel.update(id, query)
      response.status(200).send(result)
    } catch (error) {
      response.status(500).send(error)
    }
  }

  async delete(request, response) {
    try {
      const id = request.params.id
      await validateUserExists(id)

      const result = await usersModel.delete(id)
      response.status(200).send(result)
    } catch (error) {
      response.status(404).send({ error: error.message })
    }
  }
}
