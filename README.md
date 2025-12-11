<h1>Campus Skill Swap</h1>

<p>
Campus Skill Swap is a MERN-stack web application that allows ATU students to create,
browse, and manage skill-based offers such as tutoring, fitness coaching, editing,
technical support, and more. This project was developed for the Data Representation
and Querying module and demonstrates full-stack development using the MERN stack,
CRUD operations, server-side filtering, MongoDB Atlas, and a modern responsive UI.
</p>

<hr>

<h2>Features</h2>
<ul>
  <li>Create offers with title, description, skill tag, price, and rate type</li>
  <li>Browse available offers in a responsive card layout</li>
  <li>Filter offers by skill tag, price range, and active status</li>
  <li>View detailed offer information on a dedicated offer page</li>
  <li>Edit or delete existing offers</li>
  <li>View individual student profiles and their posted offers</li>
  <li>Saved offers functionality using local storage</li>
  <li>Skill-tag statistics generated using MongoDB aggregation</li>
  <li>Fully responsive UI compatible with mobile, tablet, and desktop</li>
</ul>

<hr>

<h2>Tech Stack</h2>
<h3>Frontend</h3>
<ul>
  <li>React (Vite)</li>
  <li>React Router DOM</li>
  <li>Axios</li>
  <li>Custom CSS</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Mongoose</li>
  <li>dotenv</li>
  <li>CORS</li>
  <li>Nodemon (development)</li>
</ul>

<h3>Database</h3>
<ul>
  <li>MongoDB Atlas (Cloud)</li>
</ul>

<hr>

<h2>Project Structure</h2>

<pre>
project/
  client/
    src/
      pages/
      components/
      api/
      styles/
      main.jsx
    index.html

  server/
    models/
    routes/
    middleware/
    index.js
    config.js
    .env.example

  README.md
</pre>

<hr>

<h2>API Endpoints</h2>

<h3>Offers</h3>
<ul>
  <li>GET /api/offers</li>
  <li>GET /api/offers/:id</li>
  <li>POST /api/offers</li>
  <li>PUT /api/offers/:id</li>
  <li>DELETE /api/offers/:id</li>
</ul>

<h3>Members</h3>
<ul>
  <li>GET /api/members</li>
  <li>GET /api/members/:id</li>
  <li>POST /api/members</li>
</ul>

<h3>Statistics</h3>
<ul>
  <li>GET /api/offers/stats/skill-tags</li>
</ul>

<hr>

<h2>Dependencies Installed</h2>

<h3>Client Dependencies</h3>
<ul>
  <li>react</li>
  <li>react-dom</li>
  <li>react-router-dom</li>
  <li>axios</li>
  <li>vite</li>
</ul>

<h3>Server Dependencies</h3>
<ul>
  <li>express</li>
  <li>mongoose</li>
  <li>cors</li>
  <li>dotenv</li>
  <li>nodemon (dev)</li>
</ul>

<hr>

<h2>How to Run the Project</h2>

<h3>1. Start the Client</h3>

<pre>
cd client
npm install
npm run dev
</pre>

<h3>2. Start the Server</h3>

<p>Create a <code>.env</code> file inside the server folder with the following:</p>

<pre>
MONGO_URI=your_mongodb_connection_string
</pre>

<p>Then run:</p>

<pre>
cd server
npm install
npm run dev
</pre>

<hr>

<h2>Summary</h2>

<p>
Campus Skill Swap demonstrates full-stack MERN development, integrating CRUD
functionality, filtering, MongoDB aggregation, member profiles, saved offers,
and a modern responsive interface. The project fulfills all required criteria
and includes additional enhancements aimed at achieving higher marks.
</p>
