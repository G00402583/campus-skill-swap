<h1>Campus Skill Swap — Setup Guide</h1>

<p>
This guide explains everything required to install, configure, and run the 
Campus Skill Swap MERN application. Follow the steps carefully to ensure the 
project runs correctly on your machine.
</p>

<hr>

<h2>1. Required Software (Must Be Installed)</h2>

<p>You must install the following tools before running the project:</p>

<ul>
  <li><strong>Node.js (v18 or higher)</strong> — Required for running both client and server<br>
    <a href="https://nodejs.org/">https://nodejs.org/</a>
  </li>

  <li><strong>npm</strong> — Installed automatically with Node.js</li>

  <li><strong>MongoDB Atlas account</strong> — Cloud database required for this project<br>
    <a href="https://www.mongodb.com/cloud/atlas">https://www.mongodb.com/cloud/atlas</a>
  </li>

  <li><strong>Git</strong> — To clone and work with the repository<br>
    <a href="https://git-scm.com/">https://git-scm.com/</a>
  </li>

  <li><strong>VS Code or any code editor</strong> (recommended)</li>
</ul>

<hr>

<h2>2. Required Node.js Dependencies</h2>

<h3>Client Dependencies</h3>
<p>These install automatically when running <code>npm install</code> inside <code>client/</code>.</p>

<ul>
  <li>react</li>
  <li>react-dom</li>
  <li>react-router-dom</li>
  <li>axios</li>
  <li>vite</li>
</ul>

<h3>Server Dependencies</h3>
<p>These install automatically when running <code>npm install</code> inside <code>server/</code>.</p>

<ul>
  <li>express</li>
  <li>mongoose</li>
  <li>cors</li>
  <li>dotenv</li>
  <li>nodemon (dev dependency)</li>
</ul>

<hr>

<h2>3. Setting Up MongoDB Atlas</h2>

<p>The application uses a cloud-hosted MongoDB database. Follow these steps:</p>

<ol>
  <li>Create a free MongoDB Atlas account.</li>
  <li>Create a new Cluster.</li>
  <li>Create a database user with a username and password.</li>
  <li>Set network access to "Allow access from anywhere".</li>
  <li>Copy your connection string.</li>
</ol>

<p><strong>Your connection string looks like:</strong></p>

<pre>
mongodb+srv://USERNAME:PASSWORD@clustername.mongodb.net/skill_swap_db?retryWrites=true&w=majority
</pre>

<hr>

<h2>4. Creating Your .env File (Server)</h2>

<p>
Inside the <code>server/</code> folder, create a file named <code>.env</code> with the 
following content:
</p>

<pre>
MONGO_URI=your_full_mongodb_connection_string_here
</pre>

<p><strong>Important:</strong> Replace the username and password inside the connection string.</p>

<hr>

<h2>5. Installing Dependencies</h2>

<h3>Install Client Dependencies</h3>

<pre>
cd client
npm install
</pre>

<h3>Install Server Dependencies</h3>

<pre>
cd server
npm install
</pre>

<hr>

<h2>6. Running the Application</h2>

<h3>Start the Server (Port 4000)</h3>

<pre>
cd server
npm run dev
</pre>

<p>
If successful, you will see:
<br>
<code>Connected to MongoDB</code><br>
<code>Server running on port 4000</code>
</p>

<h3>Start the Client (Vite Dev Server)</h3>

<pre>
cd client
npm run dev
</pre>

<p>Open the link shown in the terminal (usually <code>http://localhost:5173</code>).</p>

<hr>

<h2>7. Project Structure</h2>

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
    .env

  README.md
</pre>

<hr>

<h2>8. Common Problems & Fixes</h2>

<h3>Problem: Server won't start</h3>
<p>Check:</p>
<ul>
  <li>.env file exists inside server/</li>
  <li>MONGO_URI is correctly pasted</li>
  <li>No extra spaces or quotes in your connection string</li>
</ul>

<h3>Problem: Client runs but no data shows</h3>
<p>Make sure the server is running on port 4000.</p>

<h3>Problem: MongoDB connection fails</h3>
<ul>
  <li>Correct username and password?</li>
  <li>Network access set to "Allow from anywhere"?</li>
  <li>Database exists: skill_swap_db</li>
</ul>

<hr>

<h2>9. Summary</h2>

<p>
The Campus Skill Swap application is a complete MERN project featuring CRUD 
operations, filtering, MongoDB aggregation, user profiles, saved offers, and a 
responsive UI. This guide provides all steps required to install, configure, and 
successfully run the application on any machine.
</p>
