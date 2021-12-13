import fs from 'fs';
export function checkPassword(passwords, allSockets, socket) {
    let password = "430 Authentication failed\r\n";
    let rawdata = fs.readFileSync(`${__dirname}/user.json`);
    let data = JSON.parse(rawdata);
    if (data[allSockets[socket.uid]]["password"] == passwords) {
        passwords = "230 Password corresponds, successful\r\n"
    }
    return passwords;
}
  