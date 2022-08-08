import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { createConnection } from 'typeorm';
import { schema } from "./Schema";
import { Users } from './Entities/Users'

const main = async() => {

    await createConnection({
        type: "mysql",
        database: "graphDummy",
        username: "root",
        password: "admin123",
        logging: true, // Log all SQL statements generated
        synchronize: false, // If true, it checks all entities and generate a table in the DB 
        entities: [Users]// Every table has an entity
    });
  
    const app = express();
    app.use(cors()); // Connect frontend to backend
    app.use(express.json()); // Middleware to parse JSON in our server
  
    // GRAPHQL MIDWARE
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true      // API Tester
    }));
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
}

main().catch((err)=>{
    console.log(err);
});