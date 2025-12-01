const index = (req, res) => {
    res.send('Show all terms here')
}

const show = (req, res) => {
    res.send('show tern id' + req.params.id)
}

const post =  (req, res) => {
    console.log(req.body);
    res.send('show tern id' + req.params.id)
}

const update = (req, res) => {
    res.send('store tern id' + req.params.id)
}

const destroy = (req, res) => {
    res.send('update tern id' + req.params.id)
}


module.exports = {index,show, store, update, destroy}

