const { log } = require('node:console')
const terms = require('../data/terms')




const index = (req, res) => {
    res.json(terms)
}

const show = (req, res) => {

    const id = Number(req.params.id)
    log(id)
    // find hte object with the given id
    const foundTerm = terms.find(term => term.id === id);
    // if the object in undefined return a json 404 message 
    if(!foundTerm){
        return res.status(404).json(
            {
                error: true,
                message:'Could not find the resource,404 not found'
            }
        )
    }
    // otherwise return the found object to the client
    res.json(foundTerm)

}

const store =  (req, res) => {
    console.log(req.body);
    const {term,definition} = req.body
    // contruct a new obj literal to hold the ne obj value
    const newTerm = {
        id: Date.now(),
        term,
        definition
    }

    console.log(newTerm);
    // push the obj into the array
    terms.push(newTerm)
    console.log(terms);
    

    res.status(201).json(newTerm)
    
}



    

const update = (req, res) => {
    res.send('store term id' + req.params.id)
}

const destroy = (req, res) => {
    res.send('update term id' + req.params.id)
}


module.exports = {index, show, store, update, destroy}

