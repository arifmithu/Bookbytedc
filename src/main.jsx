import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home/Home.jsx";
import AuthProvider from "./components/Provider/AuthProvider.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import AllBooks from "./components/AllBooks/AllBooks.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.jsx";
import AddBook from "./components/AddBook/AddBook.jsx";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import BooksByCategory from "./components/BooksByCategory/BooksByCategory.jsx";
import Details from "./components/Details/Details.jsx";
import BorrowedBooks from "./components/Borrowed Books/BorrowedBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/allBooks",
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/addBook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/books/:category",
        element: <BooksByCategory></BooksByCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/books/${params.category}`),
      },
      {
        path: "/:id",
        element: <Details></Details>,
        // loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
