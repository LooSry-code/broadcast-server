import WebSocket, { WebSocketServer } from 'ws';

// Tipe untuk fungsi startServer
export function startServer(port: number): void {
  const wss = new WebSocketServer({ port });
  const clients: WebSocket[] = [];

  wss.on('connection', (socket: WebSocket) => {
    console.log('Klien terhubung.');

    clients.push(socket);

    socket.on('message', (message: WebSocket.Data) => {
      const msgStr = message.toString();
      console.log(`Pesan diterima: ${msgStr}`);
      broadcast(msgStr, socket, clients);
    });

    socket.on('close', () => {
      console.log('Klien terputus.');
      const index = clients.indexOf(socket);
      if (index > -1) {
        clients.splice(index, 1);
      }
    });
  });

  console.log(`Server berjalan di ws://localhost:${port}`);
}

function broadcast(message: string, sender: WebSocket, clients: WebSocket[]): void {
  clients.forEach((client) => {
    if (client !== sender && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}