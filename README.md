# Full Stack Web Application

This is a full-stack web application created as an assignment for a full-stack development internship. The application allows users to view and interact with a list of users, create teams, and perform CRUD operations on user data.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose

## Features

- Display users in cards format with pagination.
- Search users by name.
- Add filters for Domain, Gender, and Availability.
- Create teams by selecting users with unique domains and availability.
- Show team details.
- Responsive design for different screen sizes.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Vk4011/Heliverse.git



2. **Install dependencies for both frontend and backend:**

   ```bash
   cd frontend
   npm install

   cd ../backend
   npm install

### Backend:

**Set up environment variables:**
   - Create a `.env` file in the backend directory.
   - Define the following variables:
     - `MONGODB_URI`: MongoDB connection URI
     - `PORT`: Port for the backend server

3. **Run the backend & frontend development server:**
   
   ```bash
   npm run dev

## Deployment

- **Frontend:** [Deployed Frontend URL](https://heliversev.vercel.app/)
- **Backend:** [Deployed Backend URL](https://heliverse-czlh.onrender.com/users)


![Screenshot 2024-04-01 171900](https://github.com/Vk4011/Heliverse/assets/97166893/007ac663-fe8d-4c68-9c08-15a0c17ac51a)
