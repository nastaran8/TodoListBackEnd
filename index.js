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

// app.use('/tasks',userRouters,(req, res, next) => {
//     res.append('Access-Control-Allow-Origin', ['*']);
//     res.append('Access-Control-Allow-Methods', 'GET,PATCh,POST,DELETE');
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     next();
// });

app.listen(PORT)

