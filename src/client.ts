import WebSocket from 'ws';

const SERVER_URL = 'ws://localhost:8080';

export function connectToServer(): void {
  const socket = new WebSocket(SERVER_URL);

  socket.on('open', () => {
    console.log('Terhubung ke server. Ketik pesan Anda (ketik "exit" untuk keluar):');

    process.stdin.on('data', (data: Buffer) => {
      const input = data.toString().trim();

      if (input.toLowerCase() === 'exit') {
        socket.close();
        process.exit(0);
      } else {
        socket.send(input);
      }
    });
  });

  socket.on('message', (data: WebSocket.Data) => {
    console.log(`[Broadcast]: ${data.toString()}`);
  });

  socket.on('close', () => {
    console.log('Terputus dari server.');
  });

  socket.on('error', (err: Error) => {
    console.error(`Kesalahan koneksi: ${err.message}`);
  });
}