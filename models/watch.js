import mongoose from "mongoose"

const Schema = mongoose.Schema

const watchSchema = new Schema({
  brand: {type: String, required: true},
  model: {type: String, required: true},
  type: {type:String, enum: ["Analog", "Digital", "Smart"]},
  complications: {type: String},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"}
}, {
  timestamps: true
})

const Watch = mongoose.model('Watch', watchSchema)

export {
  Watch
}