import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  myWatches: [{ type: Schema.Types.ObjectId, ref: "Watch" }],
  wishList: [{ type: Schema.Types.ObjectId, ref: "WishList"}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
