import { connectMongoDB } from "../../../db/MongoConnect"

export class Folder {
  req
  res

  constructor(req, res) {
    this.req = req
    this.res = res

    this.connectMongodb()
  }

  async connectMongodb() {
    await connectMongoDB()
  }

  async create() {
    const { folder } = req.body

    try {
      Folder.create({ folder }).then((data) => {
        res.status(201).send(data)
      })
    } catch (err) {
      res.status(405).send({ error: "something went wrong", err })
    }
  }

  async get() {
    try {
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

  async deleteOne() {
    const { id } = req.body

    try {
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

  async update() {
    const data = req.body

    try {
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
}
