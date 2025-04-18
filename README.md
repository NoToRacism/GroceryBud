# Grocery Bud - React Grocery List App

Grocery Bud is a straightforward grocery list application built with React. It allows users to easily add, remove, and mark items as complete. The list persists across browser sessions thanks to the use of `localStorage`. User actions like adding, deleting, or attempting to add an empty item are accompanied by helpful toast notifications. It's a practical example of a CRUD (Create, Read, Update, Delete) application using React hooks and local storage.

## ✨ Features

- **Add Items:** Quickly add new grocery items via an input form.
- **Remove Items:** Delete items from the list with a dedicated button per item.
- **Mark as Completed:** Toggle the completion status of items with a checkbox; completed items are visually struck through.
- **Persistent List:** Grocery items are saved in the browser's `localStorage`, so your list remains available even after closing or refreshing the page.
- **User Feedback:** Uses `react-toastify` to provide notifications for adding items, deleting items, and validation errors (e.g., submitting an empty item).
- **Unique IDs:** Each item is assigned a unique ID using `nanoid`.

## 🚀 Live Demo

[Link to Live Demo](https://gorcerybudnoto.netlify.app/)

## 🛠️ Technologies Used

- **Frontend:** React.js (using Hooks like `useState`)
- **Unique IDs:** `nanoid`
- **Notifications:** `react-toastify`
- **Storage:** Browser Local Storage API (`localStorage.setItem`, `localStorage.getItem`, `JSON.stringify`, `JSON.parse`)
- **Styling:** CSS (using classes like `.section-center`, `.form-control`, `.single-item`, etc., and inline styles for text decoration)

## ⚙️ Setup and Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory>
    ```

2.  **Install dependencies:**
    Make sure you have Node.js and npm (or yarn) installed.

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will typically open the application in your default browser at `http://localhost:3000`.

## 📖 Usage

1.  Open the application in your browser.
2.  Type the name of a grocery item into the input field.
3.  Click the "Add Item" button (or press Enter). The item will appear in the list below, and a confirmation toast will appear.
4.  To mark an item as purchased, click the checkbox next to it. The item's text will be struck through. Click the checkbox again to unmark it.
5.  To remove an item from the list, click the "delete" button next to it. A confirmation toast will appear.
6.  Your list will be automatically saved in your browser's local storage.

## 🏗️ Project Structure

- `src/`: Contains the main source code.
  - `App.jsx`: The main application component. Manages the `items` state, handles adding, removing, and editing (toggling completion) items. Interacts with `localStorage` and renders `Form` and `Items`. Sets up `ToastContainer`.
  - `Form.jsx`: Renders the input field and submit button. Handles form submission, basic validation (non-empty input), and calls the `addItem` prop.
  - `Items.jsx`: Receives the `items` array and maps over it, rendering a `SingleItem` component for each item, passing down necessary props (`removeItem`, `editItem`).
  - `SingleItem.jsx`: Displays an individual grocery item, including its name, a checkbox for completion status, and a delete button. Handles checkbox changes and delete button clicks by calling props passed from `App.jsx`.
  - `main.jsx` / `index.js`: Entry point of the React application, likely imports `react-toastify` CSS.
  - CSS Files (`index.css`, `App.css`, etc.): (Assumed) Contain the necessary styles for layout and appearance.
- `public/`: Contains static assets like `index.html`.
- `package.json`: Lists project dependencies and scripts.

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add some feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.
