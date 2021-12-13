export function quit(socket) {
    socket.write("221 Closing \r\n");
    socket.end();
    socket.destroy();
}