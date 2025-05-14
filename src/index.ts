#!/usr/bin/env node

import { program } from 'commander';
import { startServer } from './server';
import { connectToServer } from './client';

program
  .name('broadcast-server')
  .description('CLI untuk menjalankan server atau terhubung sebagai klien.')
  .version('1.0.0');

// broadcast-server start
program.command('start')
  .description('Mulai server broadcast')
  .action(() => {
    startServer(8080);
  });

// broadcast-server connect
program.command('connect')
  .description('Terhubung ke server broadcast')
  .action(() => {
    connectToServer();
  });

program.parse(process.argv);