const express = require('express')
const mongoose =require("mongoose")

const app = express()

const cors = require('cors')

const { open } = require('sqlite')

const jwt = require("jsonwebtoken")

const { format, parseISO } = require('date-fns')

const sqlite3 = require('sqlite3')

const path = require('path')

const { request } = require('http')

const { el } = require('date-fns/locale')



const dbpath = path.join(__dirname, 'studentUsers.db')

app.use(express.json())

app.use(cors())

let db


const initializaDbAndServer = async () => {

  try {

    db = await open({
      
      filename: dbpath,

      driver: sqlite3.Database,

    })

      app.listen(5000, () =>
      
      console.log('server start running at http://localhost:5000'),
    

      )


  } 
  
  catch (e) {
    console.log(`DB error :${e}`)

  }
  console.log("started")

  
console.log("started2")

const res=await fetch("https://randomuser.me/api/?results=1000&users")

const data3=await res.json()


const getAdminUser=`select * from adminuser `

const AdminResponse=await db.all(getAdminUser)
console.log(AdminResponse)

const couseSchema=new mongoose.Schema({

title:String,
instructor:String,
duration:String,


})









}





initializaDbAndServer()



const convertToCamel = db => {
  
  if (db.length == 0) {
  
    return {
    
      id: db.id,
      todo: db.todo,
      category: db.category,
      priority: db.priority,
      status: db.status,
      dueDate: db.due_date,
    
    }
  
  }

  
  else {
    return db.map(e => ({
      id: e.id,
      todo: e.todo,
      category: e.category,
      priority: e.priority,
      status: e.status,
      dueDate: e.due_date,
    }))
  }
}





const checkValidity = async (request, response, next) => {

  let status, category, priority
  
  if (typeof request.body == 'object' && Object.keys(request.body).length > 0) {
    ; ({ status, category, priority } = request.body)
  } 
  
  else {
    ; ({ status, priority, category } = request.query)
  }

  const prioritylist = ['LOW', 'HIGH', 'MEDIUM']

  const statusList = ['TO DO', 'IN PROGRESS', 'DONE']

  const categorylist = ['WORK', 'HOME', 'LEARNING']

  if (status != undefined && !statusList.includes(status)) {
    response.send('Invalid Status')
    response.status(400)
    return
  } else if (priority !== undefined && !prioritylist.includes(priority)) {
    response.send(400)
    response.status('Invalid priority')
    return
  }

   else if (category !== undefined && !categorylist.includes(category)) {
    response.send(400)
    response.status('invalid Category')
  }
  
  else {
    
    next()



  }


}
app.get("/admins",async(request,response)=>{

   const dbQuery=`select * from adminuser  `
    

   const dbResponse=await db.all(dbQuery)

   console.log(dbResponse)

   response.send(dbResponse)
   


  })


app.post("/register", async (request, response) => {


  const { username, password } = request.body



  const dbQuery = `select from user where  username='${username}'`
  const userRes = await db.get(dbQuery)
  response.send(userRes)

  if (userRes === undefined) {

    const dbQuery = `insert into user(username,password) values('${username}','${password}')`

    const dbResponse = await db.run(dbQuery)

    response.send("User created successfully")

  }
  else {
    response.send("User already exists")
  }


  


})


app.post("/login",async(req,res)=>{


const {email,password}=req.body

const dbQuery=`select * from adminuser where username='${email}'`

const dbRes=await db.get(dbQuery)

console.log(req.body)

console.log(dbRes)

if(dbRes!==undefined){

const payload = {
      username: email
    }
    const jwtToken = jwt.sign(payload, "MY_SECRET_KEY")
    res.send({ payload,jwtToken })





}


else{
res.send("invalid user")

}



})


app.get("/users", async (request, response) => {
  const dbQuery = `select * from user`
  
  const dbResponse = await db.all(dbQuery)
  
  response.send(dbResponse)



}


)



app.get("/users/:id", (req, res) => {
const id=req.params
  const user =`select * from user where id=${id}`;

  res.json(user);

});


let p=[]
let u=[5,10,2,3,6,8,9,4]
for (let g=0;g<u.length;g++){

  
if(g%2==0 & g!==0){

  let o=[u[g],u[g+1]]

p.push(o)

}
else{


  p.push(u[g]+u[g+1])



}


}

console.log(p)



app.put("/users/:id", (req, res) => {
  users = users.map(u =>
    u.id == req.params.id ? { ...u, ...req.body } : u
  );
  res.json({ success: true });
});

app.delete("/users/:id", (req, res) => {
  
  const {id}=req.params
  users = `drop from user where id=${id}`;
  res.json({ success: true });
});








app.get('/todos', checkValidity, async (request, response) => {
  const { status, priority, category, search_q } = request.query
  const dbQuery = () => {
    switch (true) {
      case status !== undefined:
        return `select * from  todo where status ='${status}'`
      case priority !== undefined:
        return `select * from todo where priority='${priority}'`

      case priority !== undefined && status !== undefined:
        return `select * from todo where priority='${priority}' and status='${status}'`

      case search_q !== undefined:
        return `select * from todo where  todo like '%${search_q}%' `
      case category !== undefined && status !== undefined:
        return `select * from todo where category='${category}' and status='${status}'`

      case category !== undefined:
        return `select * from todo where category='${category}'`
      case category !== undefined && priority !== undefined:
        return `select * from todo where category='${category}' and priority='${priority}'`
      default:
        return `select * from todo`
    }
  }

  const dbResponse = await db.all(dbQuery())
  return response.json(convertToCamel(dbResponse))
})

app.get('/todos/:todoId', async (request, response) => {
  const { todoId } = request.params
  const dbQuery = `select *  from todo where id=${todoId}`

  const dbResponse = await db.get(dbQuery)
  response.send(convertToCamel(dbResponse))
})

app.get('/agenda/', async (request, response) => {
  const { date } = request.query

  const newDate = Date.parse(date)
  const formattedDate = format(newDate, 'dd-MM-yyyy')

  const dbQuery = `select * from todo where due_date='${formattedDate}'`

  const dbResponse = await db.all(dbQuery)
  response.send(dbResponse)
})

app.post('/todos', checkValidity, async (request, response) => {
  const { id, todo, priority, status, category, dueDate } = request.body

  const dbQuery = `insert into todo(id,todo,priority,status,category,due_date) values (${id},'${todo}','${priority}','${status}','${category}','${dueDate}')`

  const dbResponse = await db.run(dbQuery)
  response.send('Todo Successfully Added')
})

app.put('/todos/:todoId', checkValidity, async (request, response) => {
  const { todoId } = request.params
  const { status, priority, category, dueDate } = request.body

  const dbQuery = () => {
    switch (true) {
      case status !== undefined:
        return [
          'Status',
          `update todo set status='${status}' where id=${todoId}`,
        ]
      case priority !== undefined:
        return [
          'Priority',
          `update todo set priority='${priority}' where id=${todoId}`,
        ]

      case category !== undefined:
        return [
          'Category',
          `update todo set category='${category}' where id=${todoId}`,
        ]
      case dueDate !== undefined:
        return [
          'Due Date',
          `update  todo set due_date='${dueDate}' where id=${todoId}`,
        ]
    }
  }

  const val = dbQuery()
  const newVal = val[0]
  const dbResponse = await db.run(val[1])
  response.send(`${newVal} updated`)
})

app.delete('/todos/:todoId', async (request, response) => {
  const { todoId } = request.params
  const dbQuery = `delete from todo where id=${todoId}`

  const dbResponse = await db.run(dbQuery)
  response.send('Todo Deleted')
})

module.exports = app
