




const index = (req, res) => {
    res.send('Show all terms here')
}

const show = (req, res) => {
    res.send('show term id' + req.params.id)
}

const store =  (req, res) => {
    console.log(req.body);
    res.send('show term id' + req.params.id)
}

const update = (req, res) => {
    res.send('store term id' + req.params.id)
}

const destroy = (req, res) => {
    res.send('update term id' + req.params.id)
}


module.exports = {index,show, store, update, destroy}

