[![Build Status](https://travis-ci.org/damwhit/chat-app.svg?branch=main)](https://travis-ci.org/damwhit/chat-app)

# AIM 2.0

## Overview
This is a simple chat application that uses vue.js on the client and express on the server. It utilizes socket.io as it's web socket implementation.

## Readme Content
- [Dependencies](#dependencies)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Tradeoffs and Next Steps](#tradeoffs-and-next-steps)

## Dependencies
- `node: ">=15.0.0"`
- `yarn: ">=1.2.0"`

## Getting Started
```
$ git clone git@github.com:damwhit/chat-app.git 
  # or clone your own fork
$ cd chat-app
```

Api code lives in the api directory and client code lives in the client directory.

### Installation
#### Api:
```
$ cd api
$ yarn
```

#### Client:
```
$ cd client
$ yarn
```

#### start your development servers:

Both servers can be started from the `client` directory for ease of development.

- To start the Api server: `$ yarn run start:api`, which runs on port 3000
- To start the client server: `$ yarn run start:client`, which runs on port 8080

## Testing

Testing has been implemented with cypress and is also ran from the `client` directory.

- If both of the servers are running, you can run the test suite with the command: `$ yarn run cy:test`
- If they aren't running, run the test suite using the command: `$ yarn run start_and_test`

## Tradeoffs and Next Steps

- I wanted to focus on front-end for this app, so the back-end lacks a db or any kind of persistence.
- I'm not too happy with my test implementation. I went down a rabbit hole of trying to make a direct websocket request from one user and confirming that the other user could see it via cypress. With more time, I'd like to flesh that out.
  - My test does confirm the socket is working, but it doesn't address that above piece. 
