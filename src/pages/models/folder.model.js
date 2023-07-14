import { Schema, model, models } from "mongoose"

const folderSchema = new Schema({
  folder: {
    content: String,
    name: String,
    date: Date,
    id: String,
  },
})

const Folder = models.Folder || model("Folder", folderSchema)

export default Folder
