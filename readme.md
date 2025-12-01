# Recap Expresse

For this recap we will model a simple express REST API server and create CRUD operations for a resource called "terms", which will represent glossary terms with a definition.

Terms will have the following properties:

- id (string, unique identifier)
- term (string)
- definition (string)

## ## Project roadmap

1. Set up the Express server.
2. Create a data structure to store terms (in-memory for simplicity).
3. Implement CRUD operations:
   - Create a new term (POST /terms)
   - Read all terms (GET /terms)
   - Read a single term by id (GET /terms/:id)
   - Update a term by id (PUT /terms/:id)
   - Delete a term by id (DELETE /terms/:id)
4. Test the API using a tool like Postman or curl.
5. (Extra) Create an intelligent endpoint that generates text based on the terms using a language model.

## Dependencies

- express
- huggingface transformersjs (optional, for intelligent endpoint)

## Initial terms definition

 ```js
const terms = [
  { id: '1', term: 'API', definition: 'Application Programming Interface' },
  { id: '2', term: 'REST', definition: 'Representational State Transfer' },
  { id: '3', term: 'CRUD', definition: 'Create, Read, Update, Delete' },
  { id: '4', term: 'Express', definition: 'A minimal and flexible Node.js web application framework' }
]
```



## Project setup
- [x] add.gitignore
- [x] add body parser and register static assets middleware
- create and export the router (routes/terms.js)
- refactor the router's callback into a dedicated controller
- Implement the crud operations:
    - Index
    - show
    - store
    - update
    - destroy
- add server error middleware
- add not found middleware














