import { ApolloServer, gql } from "apollo-server"

const persons = [
    {
        name: "Miguel",
        phone: "300320202",
        street: "Calle frontend",
        city: "Medellin",
        id: "2ddd333dd-3333ss555dfd-3e34343et4"
    },
    {
        name: "Carlos",
        street: "Calle backend",
        city: "Bello",
        id: "34343434-dssdsdsd-hhnhnhn"
    },
    {
        name: "Mario",
        street: "Calle Fullstack",
        city: "Itagui",
        id: "vbvbvbv-hgghghr444-5t55t5gdsdf"
    }
]

const typeDefinitions = gql`
    type Person {
        name: String!
        phone: String
        street: String!
        city: String!
        id: ID!
    }
    

    type Query {
        personCount: Int!
        allPersons: [Person]!
        findPerson(name: String!): Person
    }
`

const resolvers = {
    Query: {
        personCount: () => persons.length,
        allPersons: () => persons,
        findPerson: (root, args) => {
            const {name} = args
            return persons.find(persons => 
                persons.name == name )
        }
    }
}

const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`)
}) 