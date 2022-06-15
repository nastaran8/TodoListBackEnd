import { uuid } from 'uuidv4';
import { faker } from '@faker-js/faker';

let users = [
    {
        todo: "Create todo list", 
        status:true, 
        id:"1"
    }
]

export const getTasks = (req,res) => res.send(users)

export const createTasks = (req,res) =>  {
    const {todo} = req.body
    let newUser = {todo:todo, status:false, id:uuid()}
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

export const deleteAllNames =  (req,res) =>  {
    users = users.map((user) => {return {...user, todo : ""}} )
    res.send(users)
}

export const deleteAllTasks =  (req,res) =>  {
    users = []
    res.send(users)
}

export const editTask = (req,res) =>  {
    const {id} = req.params;
    const {status} = req.body
    const findUser = users.find((user) => user.id === id )
    if(findUser) {
        findUser.status = status
        res.send(findUser);
    }
    else {
        res.send(`user with the id ${id} does noe exist`);
    }
    
}

export const fakeTest =  (req,res) =>  {
    const randomName = faker.word.noun();
    
    res.send(randomName)
  
}