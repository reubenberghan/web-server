# Basic Web Server

Using Node.js and Express start up a basic server serving some static HTML.

Uses two custom middleware functions:

1. logger() which logs all HTTP requests to the server console
2. requireAuthentication() which an HTTP GET request for the /about route gets passed through before request is processed by the server logging the message 'private route hit!' to the server console

See the code in action at:  [https://berghan-web-server.herokuapp.com](https://berghan-web-server.herokuapp.com)

### To do

- [ ] Refactor for ES2015
- [ ] Add link to /about route
- [ ] Add CSS (Bootstrap / Foundation)
- [ ] Flesh out requireAuthentication() middleware logic
