Campus Skill Swap

Campus Skill Swap is a MERN-stack web application that allows ATU students to create, browse, and manage skill-based offers such as tutoring, fitness coaching, editing, or technical help. The project demonstrates full CRUD functionality, cloud-hosted data storage, client-server communication, and a modern responsive UI.

Features

Create offers with title, description, skill tag, price, and rate type

Browse all available offers in a responsive card layout

Filter offers by skill tag, price range, and active status

View detailed offer information

Edit or delete existing offers

View individual student profiles and their posted offers

Saved offers functionality (local storage)

Skill-tag statistics using MongoDB aggregation

Fully responsive design suitable for mobile, tablet, and desktop

Tech Stack

Frontend: React (Vite), Axios
Backend: Node.js, Express
Database: MongoDB Atlas
ORM: Mongoose
Styling: Custom CSS

Project Structure
project/
  client/
    src/
      pages/
      components/
      api/
      styles/
  server/
    models/
    routes/
    index.js
    config/

API Endpoints

Offers

GET /api/offers

GET /api/offers/:id

POST /api/offers

PUT /api/offers/:id

DELETE /api/offers/:id

Members

GET /api/members

GET /api/members/:id

POST /api/members

Statistics

GET /api/offers/stats/skill-tags

How to Run
Client
cd client
npm install
npm run dev

Server

Create a .env file with:

MONGO_URI=your_connection_string


Then run:

cd server
npm install
npm run dev
