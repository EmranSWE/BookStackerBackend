# Book Catalog Backend (BookStackerBackend)

## Live Link: https://example.com

Application Routes:

## User

- https://book-stacker-backend.vercel.app/api/v1/auth/signup (POST)
- https://book-stacker-backend.vercel.app/api/v1/users (GET)
- https://book-stacker-backend.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- https://book-stacker-backend.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (PATCH)
- https://book-stacker-backend.vercel.app/api/v1/users/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database
- https://book-stacker-backend.vercel.app/api/v1/profile (GET)

## Category

- https://book-stacker-backend.vercel.app/api/v1/categories/create-category (POST)
- https://book-stacker-backend.vercel.app/api/v1/categories (GET)
- https://book-stacker-backend.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (Single GET) Include an id that is saved in your database
- https://book-stacker-backend.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (PATCH)
- https://book-stacker-backend.vercel.app/api/v1/categories/6177a5b87d32123f08d2f5d4 (DELETE) Include an id that is saved in your database

## Books

- https://book-stacker-backend.vercel.app/api/v1/books/create-book (POST)
- https://book-stacker-backend.vercel.app/api/v1/books (GET)
- https://book-stacker-backend.vercel.app/api/v1/books/:categoryId (GET)
- https://book-stacker-backend.vercel.app/api/v1/books/:id (GET)
- https://book-stacker-backend.vercel.app/api/v1/books/:id (PATCH)
- https://book-stacker-backend.vercel.app/api/v1/books/:id (DELETE)

## Orders

- https://book-stacker-backend.vercel.app/api/v1/orders/create-order (POST)
- https://book-stacker-backend.vercel.app/api/v1/orders (GET)
- https://book-stacker-backend.vercel.app/api/v1/orders/:orderId (GET)
