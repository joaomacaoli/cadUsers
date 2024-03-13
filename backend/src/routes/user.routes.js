import { Router } from "express";

import UserController from "../controllers/UserController.js"

const userRouter = Router()

const userController = new UserController()

userRouter.get('/', userController.read)
userRouter.post('/', userController.create)

export default userRouter
