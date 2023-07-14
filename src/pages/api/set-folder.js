import { connectMongoDB } from "../db/MongoConnect"
import Folder from "../models/folder.model"

export default async function handler(req, res) {
  const { folder } = req.body

  try {
    await connectMongoDB()
    Folder.create({ folder }).then((data) => {
      res.status(201).send(data)
    })
  } catch (err) {
    res.status(405).send({ error: "something went wrong", err })
  }
}
