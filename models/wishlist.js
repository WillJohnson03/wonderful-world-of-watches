import mongoose from "mongoose"

const Schema = mongoose.Schema

const wishListSchema = new Schema({
  name: {type: String, required: true},
  watches: [{ type: Schema.Types.ObjectId, ref: "Watch" }]
}, {
  timestamps: true
})

const WishList = mongoose.model('WishList', wishListSchema)

export {
  WishList
}