import mongoose from 'mongoose'

const Schema = mongoose.Schema

const wishListSchema = new Schema({
  name: {type: String, required: true},
  watches: [{ type: Schema.Types.ObjectId, ref: "Watch" }]
}, {
  timestamps: true
})

const profileSchema = new Schema({
  name: String,
  avatar: String,
  myWatches: [{ type: Schema.Types.ObjectId, ref: "Watch" }],
  wishList: [wishListSchema],
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
