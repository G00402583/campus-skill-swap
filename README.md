<h1>Campus Skill Swap</h1>

<p>
Campus Skill Swap is a MERN-stack web application that allows ATU students to create,
browse, and manage skill-based offers such as tutoring, fitness coaching, editing,
technical support, and more. The project demonstrates full CRUD functionality,
client–server communication using Axios, cloud-hosted data storage with MongoDB Atlas,
and a fully responsive modern UI.
</p>

<hr>

<h2>Features</h2>
<ul>
  <li>Create offers with title, description, skill tag, rate type, and price</li>
  <li>Browse available offers in a responsive card layout</li>
  <li>Filter offers by skill tag, price range, and active status</li>
  <li>View detailed information for each offer</li>
  <li>Edit or delete offers</li>
  <li>View student member profiles and their posted offers</li>
  <li>Saved offers system using Local Storage</li>
  <li>Skill-tag statistics using MongoDB aggregation</li>
  <li>Fully responsive UI for mobile, tablet, and desktop</li>
</ul>

<hr>

<h2>Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React (Vite)</li>
  <li>React Router DOM</li>
  <li>Axios</li>
  <li>Custom CSS styling</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express</li>
  <li>Mongoose</li>
  <li>CORS</li>
  <li>dotenv</li>
  <li>Nodemon (development environment)</li>
</ul>

<h3>Database</h3>
<ul>
  <li>MongoDB Atlas (Cloud-hosted database)</li>
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

<h2>Prerequisites</h2>
<ul>
  <li>Node.js version 18 or higher</li>
  <li>NPM (comes with Node)</li>
  <li>A MongoDB Atlas account with a cluster created</li>
  <li>Your MongoDB co
