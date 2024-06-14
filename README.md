# Theater Seat

Theater Seat is a MERN stack web application for booking theater tickets. Users can register, log in, and manage their bookings. The application integrates with Firebase for authentication and Stripe for payment processing.

## Features

- **User Authentication**: Log in and register with email/password or Google using Firebase.
- **Protected Routes**: Access to the dashboard pages is restricted to authenticated users.
- **Event Management**: View available events, book tickets, and manage bookings.
- **Payment Processing**: Pay for tickets using Stripe. Free tickets do not show the payment option.
- **Capabilities**: View all users, upload and update events.
- **Data Storage**: All data is stored in MongoDB including users, events, bookings, and payment details.
- **JWT Protection**: API routes are protected using JWT tokens with expiration.
- **Styling**: Tailwind CSS and Daisy UI for a modern and responsive design.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Daisy UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Payment Gateway**: Stripe.js
- **API Protection**: JWT

## Installation

- Clone the repository.
- Navigate to the project directory.
- Install dependencies using `npm install`.
- Set up Firebase for authentication.
- Set up MongoDB for database operations.
- Set up Stripe for the payment system.
- Run the frontend and backend servers using `npm run dev`.

## Test payment system

- On the payment page use 4242424242424242 as a card number
- Any 3 digits for CVC
- Any future date
- And any 5-digit postal code
- Or you can [visit.](https://docs.stripe.com/testing)

## Links

- Server Site Repo [Link](https://github.com/antu619/theater-seat-server)
- Client Site Live [Link](https://theater-seat-9028b.web.app/)
- Server Site Live [Link](https://theater-seat-server.vercel.app/)


## Contact Information

- E-mail: antu.das.619@gmail.com
- Mobile: +8801885720409
