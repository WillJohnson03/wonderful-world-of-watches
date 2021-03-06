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
}

function show(req, res) {
  Profile.findById(req.params.id)
  .populate('myWatches')
  .then(profile => {
    Watch.find({_id: {$nin: profile.myWatches}})
    .then(watches =>{
      res.render('profiles/show', {
        title: `${profile.name}'s profile`,
        profile,
        watches
      })
    })
  })
  .catch(err => {
    console.log('Profile Show Error: ', err)
    res.redirect('profiles/show')
  })
}

function addToMyWatchList(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile.myWatches.push(req.body.watchId)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${profile._id}`)
    })
  })
  .catch(err => {
    console.log(`Add to my watches Error: `, err)
    res.redirect('/')
  })
}

function deletefromMyWatchList(req, res) {  
  Profile.findById(req.user.profile._id)
  .then(profile => {    
    profile.myWatches.remove({_id: req.params.watchId})
    profile.save()
    .then(()=>{      
      res.redirect(`/profiles/${profile._id}`)
    })
  })
  .catch(err => {
    console.log(`Delete watches Error: `, err)
    res.redirect('/')
  })
}

export {
  index,
  show,
  addToMyWatchList,
  deletefromMyWatchList as delete,
}