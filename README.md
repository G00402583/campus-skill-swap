<h1>Campus Skill Swap</h1>

<p>
  Campus Skill Swap is a MERN-stack web application that allows ATU students to create, browse, and manage skill-based offers such as tutoring, fitness coaching, editing, or technical help. The project demonstrates full CRUD functionality, cloud-hosted data storage, server-side filtering, client–server communication, and a modern responsive UI built with custom CSS.
</p>

<h2>Features</h2>
<ul>
  <li>Create offers with title, description, skill tag, price, and rate type</li>
  <li>Browse all available offers in a responsive card-based layout</li>
  <li>Filter offers by skill tag, price range, and active status</li>
  <li>View detailed information about each offer</li>
  <li>Edit or delete existing offers</li>
  <li>View individual student profiles and their posted offers</li>
  <li>Saved offers functionality using local storage</li>
  <li>Skill-tag statistics generated through MongoDB aggregation</li>
  <li>Fully responsive design suitable for mobile, tablet, and desktop</li>
</ul>

<h2>Tech Stack</h2>
<ul>
  <li><strong>Frontend:</strong> React (Vite), Axios</li>
  <li><strong>Backend:</strong> Node.js, Express</li>
  <li><strong>Database:</strong> MongoDB Atlas</li>
  <li><strong>ORM:</strong> Mongoose</li>
  <li><strong>Styling:</strong> Custom CSS (dark UI + responsive grid)</li>
</ul>

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

  README.md
</pre>

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

<h2>How to Run the Project</h2>

<h3>Client</h3>
<pre>
cd client
npm install
npm run dev
</pre>

<h3>Server</h3>
<p>Create a <strong>.env</strong> file in the server directory containing:</p>

<pre>
MONGO_URI=your_connection_string
</pre>

<p>Then run:</p>

<pre>
cd server
npm install
npm run dev
</pre>

<hr/>

<p>The application will run with the client on port 5173 and the server on port 4000 by default.</p>
