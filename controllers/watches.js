import { Watch } from "../models/watch.js"

function index(req, res) {
  Watch.find({})
  .then(watches => {
    res.render('watches/index', {
      watches,
      title: 'All Watches'
    })
  })
}

function newWatch (req, res){
  res.render('watches/new', {
    title: 'Add Watch'
  })
}

function create(req, res) {
  req.body.owner = req.user.profile._id
  Watch.create(req.body)
  .then(watch => {
    res.redirect('/watches')
  })
  .catch(err => {
    console.log("Creat watch error: ", err)
    res.redirect('/watches/new')
  })
}

function show(req, res) {
  Watch.findById(req.params.id)
  .populate('owner')
  .then(watch => {
    res.render('watches/show', {
      watch,
      title: 'Watch Details'
    })
  })
}

function deleteWatch(req, res) {
  Watch.findById(req.params.id)
  .then(watch => {
    if (watch.owner.equals(req.user.profile._id)) {
      watch.delete()
      .then(() => {
        res.redirect('/watches')
      })
    } else {
      throw new Error('Not Authorized')
    }
  })
}

function edit(req, res) {
  Watch.findById(req.params.id)
  .then(watch => {
    res.render('watches/edit', {
      watch,
      title: 'Edit Watch'
    })
  })
}

function update(req, res) {
  Watch.findById(req.params.id)
  .then(watch => {
    if (watch.owner.equals(req.user.profile._id)) {
      watch.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/watches/${req.params.id}`)
      })
    } else {
      throw new Error('Not Authourize')
    }
  })
}

function createReview(req, res) {
  Watch.findById(req.params.id)
  .then(watch => {
    watch.reviews.push(req.body)
    watch.save()
    .then(() => {
      res.redirect(`/watches/${watch._id}`)
    })
  })
  .catch(err => {
    console.log('Review Error: ', err)
    res.redirect(`watches/${watch._id}`)
  })
}

export {
  index,
  newWatch as new,
  create,
  show,
  deleteWatch as delete,
  edit,
  update,
  createReview,
}