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
  Watch.create(req.body)
  .then(watch => {
    res.redirect('/watches')
  })
}

function show(req, res) {
  Watch.findById(req.params.id)
  .then(watch => {
    res.render('watches/show', {
      watch,
      title: 'Watch Details'
    })
  })
}

function deleteWatch(req, res) {
  Watch.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/watches')
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
  Watch.findByIdAndUpdate(req.params.id)
  .then(watch => {
    watch.updateOne(req.body, {new: true})
    .then(() => {
      res.redirect(`/watches/${watch._id}`)
    })
  })
  .catch(err => {
    console.log("Update Error: ", err)
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
}