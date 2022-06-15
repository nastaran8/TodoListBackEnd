import express from "express"
import bodyParser from "body-parser"
import userRouters from './routes/task.js'
import cors from "cors";
import { fakeTest } from "./controller/tasks.js";

const app = express();


const PORT = 5000;

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'DELETE',
      'PATCH'
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));

app.use(bodyParser.json());

app.use('/tasks',userRouters);
app.get('/faker', fakeTest)
 

app.listen(PORT)

