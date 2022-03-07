import mongoose from "mongoose"

const Schema = mongoose.Schema

const watchSchema = new Schema({
  brand: String,
  model: String,
  type: String,
  complications: String,
})

const Watch = mongoose.model('Watch', watchSchema)

export {
  Watch
}