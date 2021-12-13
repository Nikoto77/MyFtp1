import fs from 'fs'
export function list() {
    let filesList = "";
    let loc = fs.readdirSync(process.cwd());
    loc.forEach((file) => {
        filesList += file + "\r\n";
    });
    return filesList;
}