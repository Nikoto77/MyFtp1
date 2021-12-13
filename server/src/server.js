import { createServer } from "net";
import { checkUser } from "../checkUser";
import { cwd } from "../cwd";
import { checkPassword } from "../checkPassword";
import { pwd } from "../pwd";
import fs from 'fs';
import {help} from "../help";
import {quit} from "../quit";
import { list } from "../list";





export function launch(port) {
  const server = createServer((socket) => {

    let newIdSocket = idSocket;
    idSocket++;
    socket.uid = newIdSocket;
    const allSockets = {};
    allSockets[newIdSocket] = '';
    let idSocket = 0;
    console.log("new connection.");
    socket.on("data", (data) => {
      const message = data.toString();

      const [command, ...args] = message.trim().split(" ");
      console.log(command, args);

      switch(command) {
        case "USER":
          socket.write(checkUser(args,allSockets,socket));
          break;       
        case "PASS":
          socket.write(checkPassword(args,allSockets,socket));
          break;
        case "LIST":
          socket.write(`Current directory filenames: ${list()}\r\n`);
          break;
        case "CWD":
          socket.write(`Now You are in: ${cwd(args)}\r\n`);
          break;
        case "RETR":
          socket.write("215 \r\n");
          break;
        case "STOR":
          socket.write("211 \r\n");
          break;
        case "PWD":
          socket.write(` You are in: ${pwd()}\r\n`);
          break;
        case "QUIT":
          quit(socket);
          break;
        case "HELP":
          socket.write(help());
          break;

        default:
          console.log("502 command not supported:", command, args);
      }
    });

    socket.write("220 Hello World \r\n");
  });

  server.listen(port, () => {
    console.log(`server started at localhost:${port}`);
  });

  
}



