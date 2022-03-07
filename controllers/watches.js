import { Watch } from "../models/watch.js"

function index(req, res) {
  Watch.find({})
  .then(watches => {
    res.render('watches/index', {
      watches,
      title: 'All Watches'
    })
  })
  .catch(err => {
    console.log("Index Error:", err)
    res.redirect('/watches')
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
  .catch(err => {
    console.log("Create Error", err)
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
  .catch(err => {
    console.log('Show Error', err)
  })
}

export {
  index,
  newWatch as new,
  create,
  show,
}