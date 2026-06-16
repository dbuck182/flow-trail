# Flow-trail

A simple collaborative workflow tool for use in my everyday. Allows users to create projects(Kanban boards) and keep track of them through tasks. I use this to keep track of everything I want to get done.

## Features:
- Collaborative projects that allow users to invite other members to collaborate
- Utilizes Laravel Reverb and Echo to allow users to chat with other online project members over websockets
- Used this project as a way to learn more about events, listeners and websockets in Laravel!

## Tech Stack:
- **Backend:** Laravel 12
- **Frontend:** React (TypeScript), Inertia.js
- **Real-Time / WebSockets:** Laravel Reverb & Laravel Echo
- **UI & Interaction:** Tailwind CSS, `@dnd-kit` (Drag and Drop primitives)



<img width="1607" height="891" alt="image" src="https://github.com/user-attachments/assets/cf073832-b3e1-4400-b466-0d11b73d41f3" />

### Example Project
<img width="1600" height="886" alt="image" src="https://github.com/user-attachments/assets/8e8d72e7-5bf1-4916-a5e6-1e17bd7efbc0" />

## Running Locally
1. Clone the repo
2. Open three separate terminal windows all in the project folder
3. Start the frontend server by running -> npm run dev
4. Start the backend by running -> composer run dev
5. Lastly run the reverb server for websocket use -> php artisan reverb:start
