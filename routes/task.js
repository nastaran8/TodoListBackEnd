import express from "express"
import { uuid } from 'uuidv4';
import {getTasks,createTasks,getTask,deleteTask,editTask,fakeTest} from '../controller/tasks.js'

const router = express.Router();

router.get('/', getTasks)

router.post('/', createTasks)

router.get('/:id', getTask)

router.delete('/:id',deleteTask)

router.patch('/:id', editTask)
 




export default router;