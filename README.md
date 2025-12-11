<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Campus Skill Swap — Setup Guide</title>
</head>
<body>

<h1>Campus Skill Swap — Setup Guide</h1>

<p>
    This is my personal guide for installing, configuring, and running the Campus Skill Swap MERN application. 
    Follow the steps below exactly and everything will run smoothly.
</p>

<hr>

<h2>1. Node.js Dependencies</h2>

<h3>Client Dependencies</h3>
<p>These will install automatically when I run <code>npm install</code> inside the <strong>client/</strong> folder:</p>
<ul>
    <li>react</li>
    <li>react-dom</li>
    <li>react-router-dom</li>
    <li>axios</li>
    <li>vite</li>
</ul>

<h3>Server Dependencies</h3>
<p>These install automatically when I run <code>npm install</code> inside <strong>server/</strong>:</p>
<ul>
    <li>express</li>
    <li>mongoose</li>
    <li>cors</li>
    <li>dotenv</li>
    <li>nodemon (dev)</li>
</ul>

<hr>

<h2>2. Setting Up MongoDB Atlas</h2>
<p>
    The app uses MongoDB Atlas as the cloud database. Here’s how I set it up:
</p>
<ol>
    <li>Create a free MongoDB Atlas account.</li>
    <li>Create a new Cluster.</li>
    <li>Create a database user (username + password).</li>
    <li>Set network access to “Allow access from anywhere”.</li>
    <li>Copy my connection string.</li>
</ol>

<p>It looks like this:</p>
<pre>
mongodb+srv://USERNAME:PASSWORD@clustername.mongodb.net/skill_swap_db?retryWrites=true&w=majority
</pre>

<hr>

<h2>3. Creating My .env File (Server)</h2>
<p>
    Inside the <strong>server/</strong> folder, I make a file named <code>.env</code> and add:
</p>

<pre>
MONGO_URI=your_full_mongodb_connection_string_here
</pre>

<p>I always make sure to replace the username and password in the string.</p>

<hr>

<h2>4. Installing Dependencies</h2>

<h3>Client</h3>
<pre>
cd client
npm install
</pre>

<h3>Server</h3>
<pre>
cd server
npm install
</pre>

<hr>

<h2>5. Running the Application</h2>

<h3>Start the Server (Port 4000)</h3>
<pre>
cd server
npm run dev
</pre>

<p>If everything is correct, I should see:</p>
<pre>
Connected to MongoDB
Server running on port 4000
</pre>

<h3>Start the Client</h3>
<pre>
cd client
npm run dev
</pre>

<p>
    Then I open the link shown (usually <a href="http://localhost:5173">http://localhost:5173</a>).
</p>

<hr>

<h2>6. Project Structure</h2>

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

<h2>7. Common Problems & Fixes</h2>

<h3>Server won’t start</h3>
<ul>
    <li>.env file must exist in server/</li>
    <li>MONGO_URI must be correct</li>
    <li>No extra spaces or quotes in the connection string</li>
</ul>

<h3>Client shows no data</h3>
<ul>
    <li>The server must be running on port 4000</li>
</ul>

<h3>MongoDB connection fails</h3>
<ul>
    <li>Correct username + password?</li>
    <li>Network access set to “Allow from anywhere”?</li>
    <li>Database name exists: <strong>skill_swap_db</strong></li>
</ul>

<hr>

<h2>8. Summary</h2>
<p>
    Campus Skill Swap is a full MERN application with CRUD features, filtering, MongoDB aggregation, user profiles, 
    saved offers, and a responsive UI. This guide is everything I need to install, configure, and run the project from any machine.
</p>

</body>
</html>
