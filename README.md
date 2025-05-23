# devpond

devpond is a web application that allows users to manage and solve problems through a dashboard interface.

## Features

*   **User Authentication:** Secure sign-up, login, and session management.
*   **Dashboard:** A central hub for users to view and manage problems.
*   **Problem Tracking:** Interface to display and interact with problems or tasks.
*   **Filtering:** Ability to filter and sort problems on the dashboard.

## Tech Stack

*   **Frontend:** Next.js, React, TypeScript, Tailwind CSS
*   **Backend:** Next.js API Routes
*   **Database:** PostgreSQL with Prisma ORM
*   **Authentication:** `better-auth` (custom solution or library)
*   **UI Components:** Radix UI, Lucide React, Remixicon
*   **State Management:** Zustand

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

*   Node.js (v20 or later recommended)
*   npm
*   PostgreSQL database

### Installation

1.  **Clone the repo:**
    ```bash
    git clone https://github.com/your_username/devpond.git
    cd devpond
    ```
    *Replace `your_username/devpond.git` with the actual repository URL if different.*

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    *   Create a `.env` file in the root of the project.
    *   Add your PostgreSQL database connection string:
        ```env
        DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE_NAME"
        ```
    *   *You might need other environment variables for authentication or other services. Please check the project's configuration.*

4.  **Run database migrations:**
    *   Ensure your PostgreSQL server is running.
    *   Execute the Prisma migrations:
        ```bash
        npx prisma migrate dev
        ```

5.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:3000` (or another port if configured differently).

## Available Scripts

In the project directory, you can run the following commands:

*   `npm run dev`
    *   Runs the app in development mode with Turbopack.
    *   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
    *   The page will reload if you make edits.

*   `npm run build`
    *   Builds the app for production to the `.next` folder.
    *   It correctly bundles React in production mode and optimizes the build for the best performance.

*   `npm start`
    *   Starts the production server.
    *   This command should be run after building the application with `npm run build`.

*   `npm run lint`
    *   Lints the project files using Next.js's built-in ESLint configuration.

## Project Structure

A brief overview of the key directories:

*   `src/app/`: Contains the core application logic, routing (using Next.js App Router), and pages.
    *   `src/app/api/`: API routes for backend functionality.
    *   `src/app/dashboard/`: Components and pages related to the user dashboard.
*   `src/components/`: Shared React components used throughout the application.
    *   `src/components/ui/`: UI components, potentially from a library like Shadcn/ui or similar, built using Radix UI.
*   `src/lib/`: Utility functions, helper scripts, and library configurations (e.g., `auth.ts`, `utils.ts`).
*   `src/config/`: Configuration files for services like authentication clients (`auth-client.ts`) and Prisma (`prisma.ts`).
*   `prisma/`: Contains Prisma schema (`schema.prisma`) and migration files.
    *   `prisma/migrations/`: Database migration history.
*   `public/`: Static assets like images and icons.
