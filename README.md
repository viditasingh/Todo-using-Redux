# Redux Todo App
A modern, aesthetic todo application built with React, Redux, and Tailwind CSS.

## Redux Todo App Screenshot

## Features
- Add and remove tasks with a clean, intuitive interface
- State management with Redux Toolkit
- Responsive design that works on mobile and desktop
- Beautiful gradient UI with smooth animations
- Data persistence through Redux


## Technology Stack
- React - UI library
- Redux Toolkit - State management
- Tailwind CSS - Styling
- Vite - Build tool and development environment


## Getting Started


### Prerequisites
Node.js (v14 or above)
npm or yarn


### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/redux-todo.git
cd redux-todo
``` 
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Project Structure
```
redux-todo/
│
├── src/
│   ├── components/
│   │   ├── AddTodo.jsx      # Component for adding new todos
│   │   └── Todos.jsx        # Component for displaying todos
│   │
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js # Redux slice for todo state
│   │
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
│
├── public/                 # Static assets
└── package.json            # Project dependencies
```

## Usage
1. Type your task in the input field
2. Click "Add Task" or press Enter to add it to your list
3. Click the trash icon to delete a task
4. View your remaining task count at the bottom

## Customization
- Edit color schemes in Tailwind configuration
- Modify Redux state management in todoSlice.js
- Add additional features like task completion or categories


## License
This project is for educational purposes