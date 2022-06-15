import express from "express"
import {getTasks,createTasks,getTask,deleteTask,editTask,deleteAllTasks} from '../controller/tasks.js'

const router = express.Router();

router.get('/', getTasks)

router.post('/', createTasks)

router.delete('/',deleteAllTasks)

router.get('/:id', getTask)

router.delete('/:id',deleteTask)

router.patch('/:id', editTask)
 




export default router;