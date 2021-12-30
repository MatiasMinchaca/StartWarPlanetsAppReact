import { ApolloServer, gql} from 'apollo-server';

import axios from 'axios';


const typeDefs = gql`

    type Planet {
        name: String!
        diameter: String!
        climate: String!
        terrain: String!
        environment: String!
    }

    type Query {
        allPlanets: [Planet]!
        findPlanets(name: String!): Planet
    }

`;

const resolve = {
    Query: {
        allPlanets: async (root, args) => {
            let Page1 = "https://swapi.dev/api/planets/?page="
            let Page2 = "https://swapi.dev/api/planets/?page=2"
            let Page3 = "https://swapi.dev/api/planets/?page=3"
            let Page4 = "https://swapi.dev/api/planets/?page=4"
            let Page5 = "https://swapi.dev/api/planets/?page=6"
            let Page6 = "https://swapi.dev/api/planets/?page=5"

            const promise1 = axios.get(Page1);
            const promise2 = axios.get(Page2);
            const promise3 = axios.get(Page3);
            const promise4 = axios.get(Page4);
            const promise5 = axios.get(Page5);
            const promise6 = axios.get(Page6);
            const Data = await axios.all([promise1, promise2, promise3, promise4, promise5, promise6])
            const AllPlanets = []
            Data.map(planets => {
                AllPlanets.push(...planets.data.results)
            })
            
            return AllPlanets
        },
        findPlanets: async (root, args) =>{
            const {name} = args
            let Page1 = "https://swapi.dev/api/planets/?page="
            let Page2 = "https://swapi.dev/api/planets/?page=2"
            let Page3 = "https://swapi.dev/api/planets/?page=3"
            let Page4 = "https://swapi.dev/api/planets/?page=4"
            let Page5 = "https://swapi.dev/api/planets/?page=6"
            let Page6 = "https://swapi.dev/api/planets/?page=5"

            const promise1 = axios.get(Page1);
            const promise2 = axios.get(Page2);
            const promise3 = axios.get(Page3);
            const promise4 = axios.get(Page4);
            const promise5 = axios.get(Page5);
            const promise6 = axios.get(Page6);
            const Data = await axios.all([promise1, promise2, promise3, promise4, promise5, promise6])
            const AllPlanets = []
            Data.map(planets => {
                AllPlanets.push(...planets.data.results)
            })
            
            return AllPlanets.find(planet => planet.name === name)
            /*  Promise.all([...promise1.results, ...promise2.results, ...promise3.results, ...promise4.results, ...promise5.results, ...promise6.results])
            .then(function result(res) {
                const find = res.find(planet => planet.name === name)
                
            }) */
            /* const AllPlanets =[]
                values.map(p => {
                    AllPlanets.push(...p.results)
                })
                const find = AllPlanets.find(planet => planet.name === name)
                console.log(find)
                find */
            /*            return AllPlanets.find(planet => planet.name === name) */
            /* const {data: planetsFromApiRest} = await axios.get('https://swapi.dev/api/planets')
            const {name} = args
            return planetsFromApiRest.results.find(planet => planet.name === name) */
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers: resolve
})

server.listen().then(({url}) => {
    console.log(`Server running at ${url}`)
})
