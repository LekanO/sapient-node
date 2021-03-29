const axios = require('axios')

const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} = require('graphql')

const NameType = new GraphQLObjectType({
  name: 'Name',
  fields: () => ({
    name: { type: GraphQLString },
    address1: { type: GraphQLString },
    address2: { type: GraphQLString },
    city: { type: GraphQLString },
    country: { type: GraphQLString },
    zip_code: { type: GraphQLString },
    email: { type: GraphQLString },
    tel: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    name: {
      type: new GraphQLList(NameType),
      resolve(parent, args) {
        return axios.get('https://6060923904b05d0017ba2b6f.mockapi.io/users')
          .then(res => res.data)
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RootQuery,
})