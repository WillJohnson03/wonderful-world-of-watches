import mongoose from "mongoose"

const Schema = mongoose.Schema

const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
})

const watchSchema = new Schema({
  brand: {type: String, required: true},
  model: {type: String, required: true},
  type: {type:String, enum: ["Analog", "Digital", "Smart"]},
  complications: {type: String},
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  reviews: [reviewSchema]
}, {
  timestamps: true
})

const Watch = mongoose.model('Watch', watchSchema)

export {
  Watch
}