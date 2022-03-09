import { Profile } from "../models/profile.js"
import { Watch } from "../models/watch.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'Profiles'
    })
  })
  .catch(err => {
    console.log("P.Index Error", err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('myWatches')
  .exec(function(err, profile) {
    Watch.find({_id: {$nin: profile.myWatches}}, function(err, watches) {
      res.render('profiles/show', {
        profile,
        title: `${profile.name}'s profile`,
        watches,
      })
    })
  })
}


// new function
function addToMyWatchList(req, res) {
  console.log('I own this timepiece')
}
// new function

export {
  index,
  show,
  addToMyWatchList,
}