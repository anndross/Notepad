import { connectMongoDB } from "../../db/MongoConnect"
import Folder from "../../models/folder.model"
import { v4 as uuid } from "uuid"

export default async function handler(req, res) {
  try {
    await connectMongoDB()
    const folders = await Folder.find()

    if (folders.length === 0) {
      await Folder.create({
        folder: {
          name: "Exemplo",
          content: `<ol><li style="text-align: center;"><span style="color: rgb(0, 0, 0); background-color: rgb(255, 255, 255); font-family: &quot;times new roman&quot;, times, serif; font-size: 30px;">Olá, Muito prazer!!!<br>Eu sou a sua Lista de tarefas<br>:)</span>&nbsp;</li></ol>`,
          date: new Date(),
          id: uuid(),
        },
      }).then(async () => {
        const folders = await Folder.find()
        res.status(201).send(folders)
        return folders
      })
    }

    res.status(201).send(folders)

    return folders
  } catch (err) {
    res.status(405).send({ error: "something went wrong", err })
  }
}
