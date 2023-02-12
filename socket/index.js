import {Server} from 'socket.io'

const io = new Server(9000,{
    cors:{
        origin:"http://localhost:3000",
    }
})

let users = []
const addUser = (userData, socketId)=>{
    !users.some(user=>user.sub == userData.sub)  && (users.push({...userData,socketId}));
}

const getUser = (users,receiverId)=>{
   return users.find(user=>user.sub === receiverId);
}
io.on("connection",(socket)=>{
     console.log("user Connected to the socket");

     socket.on("addUser",userData=>{
           addUser(userData,socket.id);
           io.emit("getUsers", users);
     })
    socket.on('send message', data=>{
        const user = getUser(users,data.receiverId);
        io.to(user.socketId).emit("getMessage", data)
    })
})