Prototype E-commerce Web-App - Buy-a-Brew
Based on Reed Barger’s excellent Udemy Course: https://www.udemy.com/build-an-online-store-with-react-and-graphql-in-90-minutes

How to run Buy-a-Brew
Clone the Buy-a-Brew Project
In Terminal, clone the project from GitHub:

git clone https://github.com/denisplaster/brewhaha.git buy-a-brew
This will clone the project into a folder called buy-a-brew, the project folder. Within this folder, you will find (amongst others), the client and server sub-folders.

Install Strapi globally (used for the backend server)
In Terminal:

npm install strapi@alpha -g
Install the server dependencies
In a separate Terminal session, change directory into the server folder, and install the dependencies with npm:

cd server
npm install
Run the Strapi server
strapi start
Install the client dependencies
In a separate Terminal session, change directory into the client folder, and install the dependencies with npm:

cd client
npm install
Run the client server
npm start
This should automatically start a browser session on http://localhost:3000.

Stripe Integration
Note that you will need to supply your own Stripe API test key for the Stripe integration.
