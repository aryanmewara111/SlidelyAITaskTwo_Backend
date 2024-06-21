SlidelyAI Backend Server
Introduction
This project is the backend server for the SlidelyAI application. It is built using Node.js and Express, and it uses TypeScript for type safety. This README provides a step-by-step guide on how to clone the repository, install the necessary dependencies, and start the server.

Prerequisites
Ensure you have the following installed on your machine:

Git
Node.js (which includes npm)
Installation
1. Clone the Repository
 git clone https://github.com/aryanmewara111/slidelyai_backend_server.git

2. Change Directory
Move into the directory where the repository was cloned:
cd slidelyai_backend_server

3. Install Dependencies
Install the necessary dependencies using npm:
npm install

4. Initialize npm
Initialize npm in the directory:
npm init -y

5. Install Express and Other Middleware
Install Express, Body-Parser, and CORS:
npm install express body-parser cors --save

6. Install TypeScript and Related Type Definitions
Install TypeScript and type definitions for Express, Body-Parser, and CORS:
npm install @types/express @types/body-parser @types/cors --save-dev

7. Install TypeScript, ts-node, and nodemon
Install TypeScript, ts-node, and nodemon for development purposes:
npm install typescript ts-node nodemon --save-dev

Starting the Server
To start the server, run the following command:
npx ts-node src/index.ts

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License.


