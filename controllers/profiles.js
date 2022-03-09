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
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      Watch.find({_id: {$nin: profile.watch}}, function(err, watches) {
        res.render('profiles/show', {
          profile,
          title: `${profile.name}'s profile`,
          watches,
        })
      })
    })
  })
  .catch((err) => {
    console.log('P.Show Error: ', err)
    res.redirect('/')
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