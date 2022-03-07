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
    res.redirect('/watches')
  })
}

function newWatch (req, res){
  res.render('watches/new', {
    title: 'Add Watch'
  })
}

export {
  index,
  newWatch as new
}