# Healthcheck App

Healthcheck is a web application that allows users to book medical appointments online from any hospital in Kenya. The app aims to provide easy access to healthcare services and exceptional customer support.

## Features

- User Registration: Users can create an account by providing their name, email, and password. Registered users can access additional features and benefits.
- User Login: Registered users can log in to their accounts using their email and password credentials.
- Appointment Booking: Users can book medical appointments by selecting a hospital, date, time, and reason for the visit. The app provides a form to input the required details.
- Appointment Listing: Users can view a list of their booked appointments, including details such as hospital, date, time, and reason.
- User Settings: Users can access and update their account settings, including personal information and preferences.
Text Replies: Users can receive text replies from the app, which may include notifications, reminders, or other important messages.


### Technologies Used

- Front-end: React.js, React Router, Axios
- Back-end: Node.js, Express.js
- Database: MongoDB


### Setup and Installation

1. Clone the repository from GitHub:

`git clone https://github.com/your-username/healthcheck-app.git`

2. Navigate to the project directory:

cd healthcheck-app

3. Install the required dependencies:

npm install

4. Start the development server:

npm start

5. Access the app in your web browser at `http://localhost:3000`.


### Backend API

The Healthcheck app interacts with a backend API for user authentication, appointment management, and other operations. The API is built using Node.js and Express.js, and it utilizes a MongoDB database for data storage. The API endpoints include:

- POST /users: Creates a new user account.
- POST /login: Authenticates a user and returns a user token for subsequent requests.
- GET /users/:id: Retrieves user data based on the user identifier.
- POST /appointments: Creates a new appointment for the authenticated user.
- GET /appointments: Retrieves a list of appointments for the authenticated user.
- DELETE / appointments: Deletes an already created appointment for the authenticated user.
- GET /hospitals: Retrieves a list of hospitals for the user to choose from.
- GET /replies: Retrieves a list of text replies from the app.

The backend API is hosted separately and should be running on `http://localhost:9292` during development. Make sure to update the API base URL in the front-end code if you host the API on a different domain or port.

### Folder Structure

The project follows a standard folder structure:

- src: Contains the main source code for the React front-end.
components: Includes all the React components used in the app.
pages: Contains the top-level pages of the app, such as Home, Registration, Login, Booking, Appointments, and Settings.
services: Provides service modules for API communication, authentication, and data management.
assets: Holds static assets like images, icons, and CSS styles.
- server: Contains the backend API code built with Node.js and Express.js.


### Contributing

If you'd like to contribute to the Healthcheck app, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your forked repository.
4. Submit a pull request to the main repository.

Please make sure to include detailed information about the changes made and any relevant documentation updates.

## License

The Healthcheck app is released under the MIT License.

# Authors

Dennis Mutuma Marangu.
