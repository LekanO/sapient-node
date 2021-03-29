const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const cors = require('cors')
const schema = require('./schema');
var casual = require('casual');

const app = express();

//Allow cors-origin
app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
  }));

const port = process.env.PORT || 5000
app.listen(port, (err) => {
  if (err) throw err
  console.log(`Graphql - Server started on: http://localhost:${port}`)
})
