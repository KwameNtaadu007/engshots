# engshots 

**Engshots** is a Next.js application that allows you to upload photos from your photography adventures and manage them using Firebase Storage, Authentication, and Firestore.

### Features

* Upload photos captured during your adventures.
* Secure user authentication with Firebase Authentication.
* Store photo metadata and descriptions in Firestore.
* Responsive design for a seamless user experience across devices.

### Technologies Used

* Next.js: A React framework for server-rendered and statically generated web applications.
* Firebase: Google's cloud platform offering various services including Storage, Authentication, and Firestore.
* Tailwind CSS (optional): A utility-first CSS framework for rapid UI development.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/KwameNtaadu007/engshots.git
   ```

2. Install dependencies:

   ```bash
   cd engshots
   npm install
   ```

### Setup

1. Create a Firebase project and enable the following services:
   * Storage
   * Authentication
   * Firestore

2. Install the Firebase CLI globally:

   ```bash
   npm install -g firebase-tools
   ```

3. Initialize Firebase in your project:

   ```bash
   firebase init
   ```

4. Follow the Firebase CLI instructions to configure your project and download the necessary configuration files. These files will typically be located in a folder named `firebase` at the root of your project.

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Access the application in your browser at http://localhost:3000 by default.

### Contributing

We welcome contributions to this project! Please see the CONTRIBUTING.md file for guidelines on how to contribute.

