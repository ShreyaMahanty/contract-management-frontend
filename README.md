Live Link : https://shreyamahanty.github.io/contract-management-frontend/

Contract Management Platform (Frontend)
Overview
This is a frontend project built using React.
It allows users to create contract blueprints, generate contracts from them, and manage each contract through a strict lifecycle.

The project demonstrates component-based architecture, state management, and a clear UI flow. No backend is used; all data is stored locally using React state and browser localStorage.

Key Objectives
Demonstrate frontend architecture and React state management
Implement a controlled contract lifecycle
Build a clear and usable UI without relying on predefined designs
Focus on logic, clarity, and maintainability over visual polish
Tech Stack
React (with Vite)
JavaScript (ES6+)
HTML & CSS
Assumptions & Limitations
Only one blueprint is handled for simplicity
Data is persisted using browser localStorage
UI focuses on functionality over visual polish
Core Features
1. Blueprint Management
Create reusable contract blueprints
Define configurable fields
Blueprint data is stored locally
2. Contract Creation
Generate contracts from existing blueprints
Contracts inherit blueprint structure
Users can fill contract field values
3. Contract Lifecycle Management
Each contract follows a strict lifecycle:

Created → Approved → Sent → Signed → Locked
Revoked (can occur before Locked)

Lifecycle rules:

State transitions are controlled
No skipping of steps is allowed
Locked contracts cannot be edited
Revoked contracts cannot proceed further
4. Contract Dashboard
Display contracts in a tabular format
Filter contracts by status
Action buttons are dynamically rendered based on the current contract state
Clear indication when no actions are available
Project Structure
contract-management-frontend/ │ ├─ public/ # Static files like index.html, favicon ├─ src/ │ ├─ components/ # React components (Blueprints, Contracts, Dashboard) │ ├─ pages/ # Page components (Home, Dashboard, Contract Details) │ ├─ utils/ # Helper functions and lifecycle logic │ ├─ styles/ # CSS files │ ├─ App.jsx # Main React app │ └─ main.jsx # Entry point for Vite ├─ package.json # Project dependencies and scripts ├─ vite.config.js # Vite configuration └─ README.md # Project documentation

Setup & Running the Project
Install dependencies:
npm install
Start Development:
npm run dev
Open the URL displayed in your browser to view the project.
Notes
No backend is used; all data is stored locally
UI is simple and focused on functionality
Lifecycle rules are strictly enforced for consistency
Author
Shreya Mahanty
