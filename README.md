# Social Feed Application

A simple React application demonstrating reusable components and data fetching with posts and sharing functionality.

## Features

- Fetch and display posts from JSONPlaceholder API
- Like/Unlike posts
- Share dialog for posts
- Loading states and error handling
- Responsive design

## Component Architecture

src/

├── components/

│ ├── Post.jsx # Individual post with like/share

│ ├── Posts.jsx # Posts container & data fetching

│ ├── ShareDialog.jsx # Share modal

│ └── Loader.jsx # Loading spinner

└── App.jsx # Main app component



## Usage

- Click "Add Posts" button to fetch posts
- Like/Unlike posts using the heart icon
- Share posts using the share button
- Close share dialog using X or Close button

## Technical Approach

### Component Design
- Reusable, modular components
- PropTypes validation
- Clear component APIs
- Consistent styling with Tailwind CSS

### Data Fetching
- Centralized in Posts component
- Loading states
- Error handling
- State management with React hooks

## Dependencies

- React
- @heroicons/react
- prop-types
- Tailwind CSS


## Installation

1. Clone the repository:
   
   git clone https://github.com/Amanmalik5211/social-feed.git
   
   cd social-feed

2. Install dependencies:
   
   npm install

3. Install required packages:
   
   npm install @heroicons/react prop-types


4. Start the development server:
   
   npm run dev


The app will be available at `http://localhost:5173`
