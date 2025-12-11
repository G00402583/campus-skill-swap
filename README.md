<h1>Campus Skill Swap</h1>

<p>
  Campus Skill Swap is a MERN-stack web application that allows ATU students to create, browse, and manage skill-based offers such as tutoring, fitness coaching, editing, or technical help. The project demonstrates full CRUD functionality, cloud-hosted data storage, client-server communication, and a modern responsive UI.
</p>

<h2>Features</h2>

<ul>
  <li>Create offers with title, description, skill tag, price, and rate type</li>
  <li>Browse all available offers in a responsive card layout</li>
  <li>Filter offers by skill tag, price range, and active status</li>
  <li>View detailed offer information</li>
  <li>Edit or delete existing offers</li>
  <li>View individual student profiles and their posted offers</li>
  <li>Saved offers functionality using local storage</li>
  <li>Skill-tag statistics using MongoDB aggregation</li>
  <li>Fully responsive design suitable for mobile, tablet, and desktop</li>
</ul>

<h2>Tech Stack</h2>

<ul>
  <li>Frontend: React (Vite), Axios</li>
  <li>Backend: Node.js, Express</li>
  <li>Database: MongoDB Atlas</li>
  <li>ORM: Mongoose</li>
  <li>Styling: Custom CSS</li>
</ul>

<h2>Project Structure</h2>

<pre><code>project/
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
</code></pre>

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

<h2>How to Run</h2>

<h3>Client</h3>
<pre><code>cd client
npm install
npm run dev
</code></pre>

<h3>Server</h3>

<p>Create a <code>.env</code> file with:</p>

<pre><code>MONGO_URI=your_connection_string
</code></pre>

<p>Then run:</p>

<pre><code>cd server
npm install
npm run dev
</code></pre>
