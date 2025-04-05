# nodejs-resturant-food-app

Restaurant Food Ordering Application
built using Node.js and Express.js.
It provides a robust backend for managing restaurant operations,
including user management, restaurant details, categories, food items, and orders.

# Features

User Management: Create, read, update, and delete user profiles.
Restaurant Management: Handle restaurant details and operations.
Category Management: Organize food items into categories.
Food Item Management: Add, update, and remove food items from the menu.
Order Processing: Manage customer orders efficiently.

# Technologies Used

Node.js: JavaScript runtime for server-side development.
Express.js: Web framework for Node.js to build RESTful APIs.
MongoDB: NoSQL database for data storage.
Mongoose: ODM library for MongoDB and Node.js.
JWT (JSON Web Tokens): For authentication and authorization.

# Set up environment variables:

Create a .env file in the root directory and add the following:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

# API Endpoints

The application provides the following RESTful API endpoints:

User Routes:

POST /api/users/register: Register a new user.
POST /api/users/login: Authenticate a user and retrieve a token.
GET /api/users/profile: Retrieve the authenticated user's profile.
PUT /api/users/profile: Update the authenticated user's profile.

Restaurant Routes:

GET /api/restaurants: Retrieve a list of all restaurants.
POST /api/restaurants: Create a new restaurant.
GET /api/restaurants/:id: Retrieve details of a specific restaurant.
PUT /api/restaurants/:id: Update a specific restaurant's details.
DELETE /api/restaurants/:id: Delete a specific restaurant.

Category Routes:

GET /api/categories: Retrieve all categories.
POST /api/categories: Create a new category.
PUT /api/categories/:id: Update a specific category.
DELETE /api/categories/:id: Delete a specific category.

Food Item Routes:

GET /api/foods: Retrieve all food items.
POST /api/foods: Add a new food item.
GET /api/foods/:id: Retrieve details of a specific food item.
PUT /api/foods/:id: Update a specific food item.
DELETE /api/foods/:id: Delete a specific food item.

Order Routes:

POST /api/orders: Place a new order.
GET /api/orders/:id: Retrieve details of a specific order.
GET /api/orders/user/:userId: Retrieve all orders for a specific user.
