import Folder from "../models/folder.model"
import { connectMongoDB } from "../db/MongoConnect"

export default async function handler(req, res) {
  const data = req.body

  try {
    await connectMongoDB()

    const folders = await Folder.find()

    const folderToUpdate = folders.find((e) => {
      return e.folder.id === data.id
    })

    await Folder.updateOne(folderToUpdate, {
      folder: {
        ...folderToUpdate.folder,
        ...data.update,
      },
      _id: folderToUpdate._id,
      __v: folderToUpdate.__v,
    })

    res.status(200).send("The folder was updated")
  } catch (err) {
    res.status(400).send("erro", err)
  }
}
