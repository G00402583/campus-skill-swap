<h1>Campus Skill Swap</h1>

<p>
  Campus Skill Swap is a MERN-stack web application that allows ATU students to offer skills, browse services, and exchange help on campus.
</p>

<p>
  I developed this project as part of the Data Representation &amp; Querying module. It demonstrates full-stack development using the MERN stack, CRUD operations, server-side filtering, MongoDB Atlas, and a modern responsive UI.
</p>

<hr>

<h2>What the Application Does</h2>

<p>Campus Skill Swap allows students to:</p>

<ul>
  <li>Create offers for services such as tutoring, fitness coaching, editing, IT help, and more</li>
  <li>Browse available services posted by other students</li>
  <li>Filter listings by skill tag, price range, and active status</li>
  <li>View detailed information about each offer</li>
  <li>Edit or delete their offers</li>
  <li>See aggregated skill tag statistics</li>
  <li>Browse a directory of student members</li>
  <li>Use a fully responsive, modern interface that works on all device sizes</li>
</ul>

<hr>

<h2>Tech Stack (MERN)</h2>

<table>
  <thead>
    <tr>
      <th>Layer</th>
      <th>Technology</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend</td>
      <td>React (Vite)</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Node.js + Express</td>
    </tr>
    <tr>
      <td>Database</td>
      <td>MongoDB Atlas (cloud hosted)</td>
    </tr>
    <tr>
      <td>ORM</td>
      <td>Mongoose</td>
    </tr>
    <tr>
      <td>HTTP Client</td>
      <td>Axios</td>
    </tr>
    <tr>
      <td>Styling</td>
      <td>Custom CSS with a modern dark UI</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>Project Status</h2>

<ul>
  <li>Fully functional</li>
  <li>Meets all minimum and advanced requirements</li>
  <li>Includes additional features designed for higher marks</li>
  <li>Fully operational on a local development environment</li>
  <li>UI is polished to a professional standard</li>
</ul>

<hr>

<h2>Features of Campus Skill Swap</h2>

<p>
  This project includes a number of features beyond the basic MERN requirements. Below is a breakdown of the completed functionality.
</p>

<h3>Core Features</h3>

<h4>Create Skill Offers</h4>
<p>Students can submit the following data when creating an offer:</p>
<ul>
  <li>Name</li>
  <li>Email</li>
  <li>Course and study year</li>
  <li>Offer title</li>
  <li>Description</li>
  <li>Skill tag</li>
  <li>Price and rate type</li>
  <li>Active status</li>
</ul>
<p>All data is stored in MongoDB through Mongoose.</p>

<h4>Browse Offers</h4>
<p>Users can view all offers in a card-based layout that displays:</p>
<ul>
  <li>Title</li>
  <li>Price</li>
  <li>Description</li>
  <li>Skill tag</li>
  <li>Student information</li>
  <li>Link to a detailed view page</li>
</ul>

<h4>Offer Filter System</h4>
<p>Users can filter offers by:</p>
<ul>
  <li>Skill tag</li>
  <li>Minimum price</li>
  <li>Maximum price</li>
  <li>Only active offers</li>
</ul>
<p>This demonstrates server-side query handling and filtering with Express and MongoDB.</p>

<h4>Offer Detail Page</h4>
<p>Each offer has a dedicated detail page showing:</p>
<ul>
  <li>Title</li>
  <li>Description</li>
  <li>Skill tag</li>
  <li>Rate type</li>
  <li>Price</li>
  <li>Academic details of the creator</li>
  <li>Created date</li>
</ul>
<p>The page also includes Edit and Delete options.</p>

<h4>Edit and Update Offers</h4>
<p>Users can update existing offers using an edit form that performs a PUT request.</p>

<h4>Delete Offers</h4>
<p>Users can delete offers, and the data is removed from MongoDB.</p>

<h3>Advanced Features for Higher Marks</h3>

<h4>Skill Tag Statistics (Aggregation)</h4>
<p>I implemented a MongoDB aggregation pipeline that:</p>
<ul>
  <li>Counts how many offers exist per skill tag</li>
  <li>Displays the results on the sidebar as a visual summary</li>
</ul>
<p>This shows the use of more advanced MongoDB features.</p>

<h4>Member Directory</h4>
<p>
  A full directory of all student members is included, displaying:
</p>
<ul>
  <li>Name</li>
  <li>Course</li>
  <li>Study year</li>
  <li>Number of offers created</li>
</ul>
<p>
  This demonstrates relational-like data modelling using ObjectId references.
</p>

<h4>Modern, Professional UI</h4>
<p>The UI includes:</p>
<ul>
  <li>Gradient backgrounds</li>
  <li>Card-based design</li>
  <li>Responsive CSS grid</li>
  <li>Smooth interaction feedback</li>
  <li>A consistent dark theme</li>
</ul>
<p>The interface resembles a polished SaaS application.</p>

<h4>Fully Mobile Responsive</h4>
<p>Pages are designed to work seamlessly on:</p>
<ul>
  <li>Mobile</li>
  <li>Tablet</li>
  <li>Desktop</li>
</ul>
<p>This includes fluid layouts, adaptive components, and mobile-first spacing.</p>

<hr>

<h2>Technical Architecture</h2>

<h3>Overview</h3>
<p>
  Campus Skill Swap is built on the MERN stack, with clear separation between the client, server, and database layers.
</p>

<ul>
  <li>Client: React (Vite)</li>
  <li>Server: Node.js + Express</li>
  <li>Database: MongoDB Atlas</li>
  <li>Data Modelling: Mongoose</li>
</ul>

<h3>Folder Structure</h3>

<pre><code>project/
 ├── client/               # React front-end
 │   ├── src/
 │   │   ├── pages/        # All page components
 │   │   ├── components/   # Reusable UI components
 │   │   ├── api/          # Axios client
 │   │   ├── styles/       # Global CSS
 │   │   └── main.jsx
 │   └── index.html
 │
 ├── server/
 │   ├── models/           # Mongoose schemas
 │   ├── routes/           # Express route controllers
 │   ├── middleware/       # Error handling / future auth
 │   ├── index.js          # Server entry point
 │   └── config.js
 │
 └── README.md
</code></pre>

<h3>MongoDB &amp; Mongoose</h3>

<h4>Member Schema</h4>
<p>Stores information about each student.</p>

<h4>Offer Schema</h4>
<p>Contains a reference to the member who created the offer:</p>

<pre><code>memberId: { type: mongoose.Schema.Types.ObjectId, ref: "Member" }
</code></pre>

<p>This allows offers to display full member information using Mongoose population.</p>

<h3>Express API Architecture</h3>

<p>The backend exposes RESTful endpoints:</p>
<ul>
  <li><code>/api/offers</code></li>
  <li><code>/api/members</code></li>
  <li><code>/api/offers/stats/skill-tags</code></li>
</ul>
<p>Each endpoint uses controller logic with structured error handling.</p>

<h3>Client–Server Communication</h3>

<p>Axios is used for all requests:</p>

<pre><code>apiClient.get("/offers");
apiClient.post("/offers", payload);
apiClient.put(`/offers/${id}`, payload);
apiClient.delete(`/offers/${id}`);
</code></pre>

<h3>Front-End Architecture</h3>

<p>React is divided into:</p>

<p><strong>Pages:</strong></p>
<ul>
  <li>OffersListPage</li>
  <li>OfferDetailPage</li>
  <li>NewOfferPage</li>
  <li>EditOfferPage</li>
  <li>MembersListPage</li>
</ul>

<p><strong>Components:</strong></p>
<ul>
  <li>SkillTagSummary</li>
  <li>Navigation header</li>
  <li>Reusable button styles</li>
  <li>Offer cards</li>
</ul>

<p>This results in clean, maintainable front-end logic.</p>

<hr>

<h2>API Documentation</h2>

<h3>Offers API</h3>

<h4>GET /api/offers</h4>
<p>Returns all offers. Optional filters:</p>
<ul>
  <li><code>?skillTag=</code></li>
  <li><code>?minPrice=</code></li>
  <li><code>?maxPrice=</code></li>
  <li><code>?isActive=true</code></li>
</ul>

<h4>GET /api/offers/:id</h4>
<p>Returns a single offer by ID.</p>

<h4>POST /api/offers</h4>
<p>Creates a new offer.</p>
<p>Example body:</p>

<pre><code>{
  "memberId": "123",
  "title": "Gym Coaching",
  "descriptionText": "One-on-one training",
  "skillTag": "fitness",
  "rateType": "per_hour",
  "priceValue": 20,
  "isActive": true
}
</code></pre>

<h4>PUT /api/offers/:id</h4>
<p>Updates an existing offer.</p>

<h4>DELETE /api/offers/:id</h4>
<p>Deletes an offer.</p>

<h3>Stats API</h3>

<h4>GET /api/offers/stats/skill-tags</h4>
<p>Returns aggregated counts for each skill tag.</p>

<h3>Members API</h3>

<h4>GET /api/members</h4>
<p>Returns all members.</p>

<h4>GET /api/members/:id</h4>
<p>Returns details of a specific member.</p>

<h4>POST /api/members</h4>
<p>Creates a new member.</p>

<hr>

<h2>User Guide</h2>

<p>This is a simple guide on how to use the application.</p>

<h3>1. Browse Offers</h3>
<p>Navigate to “Browse offers” in the top menu to view skills offered by students. The list displays titles, prices, tags, and creator information.</p>

<h3>2. Filter Offers</h3>
<p>Use the filters on the page:</p>
<ul>
  <li>Skill tag</li>
  <li>Minimum and maximum price</li>
  <li>Only active offers</li>
</ul>
<p>Press "Apply filters" to refine results.</p>

<h3>3. View Offer Details</h3>
<p>
  Click “View details” on any offer to see the full description, pricing details, student information, created date, and the edit/delete actions.
</p>

<h3>4. Create an Offer</h3>
<p>Go to “Create offer” and fill in the form with your details and offer information, then submit to create the offer.</p>

<h3>5. Edit an Offer</h3>
<p>On an offer detail page, click “Edit”, change the fields, and save.</p>

<h3>6. Delete an Offer</h3>
<p>Click “Delete offer” on the detail page to remove it from the database.</p>

<h3>7. View Members Directory</h3>
<p>
  View all registered students, including their name, course, study year, and number of offers posted.
</p>
