import { uuid } from 'uuidv4';
import { faker } from '@faker-js/faker';

let users = []

export const getTasks = (req,res) => res.send(users)

export const createTasks = (req,res) =>  {
    const {todo} = req.body
    let newUser = {todo:todo, isDone:false, id:uuid()}
    users.push(newUser)
    res.send(newUser);
}

export const getTask = (req,res) =>  {
    const {id} = req.params
    const findUser = users.find((user) => user.id === id )
    if(findUser)  res.send(findUser)
    else res.send('user does not exist');
}

export const deleteTask =  (req,res) =>  {
    const {id} = req.params
    users = users.filter((user) => user.id !== id )
    res.send(users)
}

export const editTask = (req,res) =>  {
    const {id} = req.params;
    const {isDone} = req.body
    const findUser = users.find((user) => user.id === id )
    if(findUser) {
        findUser.isDone = isDone
        res.send(findUser);
    }
    else {
        res.send(`user with the id ${id} does noe exist`);
    }
    
}

export const fakeTest =  (req,res) =>  {
    const randomName = faker.word.noun(); // Rowan Nikolaus
    res.send(randomName)
  
}