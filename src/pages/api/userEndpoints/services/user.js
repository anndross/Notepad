import jsonwebtoken from "jsonwebtoken"
import { connectMongoDB } from "../../../db/MongoConnect"
import User from "../../../models/user.model"

export class UserServices {
  constructor() {
    this.connectMongodb()
  }

  async connectMongodb() {
    await connectMongoDB()
  }

  async authentication(data) {
    const jwt = jsonwebtoken

    try {
      const user = await User.findOne({
        email: data.email,
        password: data.password,
      })
      if (user) {
        const token = jwt.sign({ user }, process.env.SECRET, {
          expiresIn: 300, // expires in 5min
        })

        return res.json({ auth: true, token: token })
      } else return res.status(500).json({ message: "Login inválido!" })
    } catch (err) {
      res.status(405).send({ error: "something went wrong", err })
    }
  }

  logout() {
    res.json({ auth: false, token: null })
  }

  async create(data) {
    try {
      User.create({ data }).then((data) => {
        res.status(201).send(data)
      })
    } catch (err) {
      res.status(405).send({ error: "something went wrong", err })
    }
  }

  async update(data) {
    try {
      const users = await User.find()

      const userToUpdate = users.find((e) => {
        return e.user.id === data.id
      })

      await Folder.updateOne(userToUpdate, {
        user: {
          ...userToUpdate.user,
          ...data.update,
        },
        _id: userToUpdate._id,
        __v: userToUpdate.__v,
      })

      res.status(200).send("The user was updated")
    } catch (err) {
      res.status(400).send({ error: "something went wrong", err })
    }
  }

  async getById(id) {
    try {
      const user = await User.findById(id)

      res.status(200).send(user)
    } catch (err) {
      res.status(400).send({ error: "something went wrong", err })
    }
  }
}
