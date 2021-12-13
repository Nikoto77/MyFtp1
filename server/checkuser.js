import fs from 'fs';
export function checkUser(name, allSockets, socket) {
     let message = "User doesn't exist";
     let rawdata = fs.readFileSync(`${__dirname}/user.json`);
     let user = JSON.parse(rawdata);
     if (user[name] != null) {
         allSockets[socket.uid] = name;
         message = "331 User " + name + " is valid, enter PASS \n\r"
     }
     return message;
 }