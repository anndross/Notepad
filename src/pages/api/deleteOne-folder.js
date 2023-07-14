import Folder from "../models/folder.model"
import { connectMongoDB } from "../db/MongoConnect"

export default async function handler(req, res) {
  const { id } = req.body

  try {
    await connectMongoDB()

    const folders = await Folder.find()

    const folderToDelete = folders.find((e) => {
      return e.folder.id === id
    })

    await Folder.deleteOne(folderToDelete)

    res.status(201).send("foi deletado")
  } catch (err) {
    res.status(400).send("nao foi deletado")
  }
}
