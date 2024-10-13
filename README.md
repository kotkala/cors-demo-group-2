# cors-demo-group-2
 
Here’s a README in English based on your requirements:

---

# React CORS Example

## Running the applications:

1. In the `server` directory:  
   ```bash
   node server.js
   ```

2. In the `pageA` directory:  
   ```bash
   npm start
   ```

3. In the `pageB` directory:  
   ```bash
   npm start
   ```

## Explanation of the React CORS Example:

### Server (port 3000):

- The server is configured as before, but now it allows CORS from two specific origins:  
  `http://localhost:3001` and `http://localhost:3002`.

### Page A (`http://localhost:3001`):

- Uses React hooks (`useState`, `useEffect`) to manage state and side effects.
- Automatically updates the count every second by calling the `/count` API.

### Page B (`http://localhost:3002`):

- Also uses React, with a button to increment the count.
- When the button is clicked, it calls the `/click` API to increase the count and displays the latest value.

## This example illustrates CORS in a React environment:

- It demonstrates how React applications from different origins can interact with the same API.
- It showcases the use of CORS in a development environment, where applications are running on different ports.
- It shows how to manage state and side effects in React when working with remote APIs.
