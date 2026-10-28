# Gossip Folks Chat

A real-time group chat with a playful set of eight gossip archetypes. Messages are broadcast to everyone connected to the app.

## Features

- Real-time messaging powered by Socket.IO
- Choose a username and chat with other connected visitors
- Eight Gossip Types: The Protector, The Confidant, The Auntie, The Observer, The Spiller, The Lurker, The TV/Radio Host, and The Spectator
- Responsive web interface with illustrated character profiles

## Requirements

- Node.js
- npm

## Run locally

```sh
npm install
node index.js
```

Open [http://localhost:3000](http://localhost:3000) in your browser. To use a different port, set the `PORT` environment variable before starting the server.

## Tech stack

- Node.js and Express serve the web app
- Socket.IO provides real-time message broadcasting
- HTML, CSS, and browser JavaScript power the client