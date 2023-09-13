import { Schema, model, models } from "mongoose"

const userSchema = new Schema({
  user: {
    content: String,
    name: String,
    date: Date,
    id: String,
  },
})

const User = models.User || model("User", userSchema)

export default User
