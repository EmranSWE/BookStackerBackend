# Book Catalog Backend (BookStackerBackend)

## Live Link: https://book-stacker-backend.vercel.app/

Application Routes:

## User

- https://book-stacker-backend.vercel.app/api/v1/auth/signup (POST)
- https://book-stacker-backend.vercel.app/api/v1/users (GET)
- https://book-stacker-backend.vercel.app/api/v1/users/26fb2bd4-7c48-492d-8799-a0aede900fe8 (Only admin), You can signup as admin first, then check
- https://book-stacker-backend.vercel.app/api/v1/users/26fb2bd4-7c48-492d-8799-a0aede900fe8 (PATCH)(Only admin)
- https://book-stacker-backend.vercel.app/api/v1/users/26fb2bd4-7c48-492d-8799-a0aede900fe8(DELETE) (Only admin)
- https://book-stacker-backend.vercel.app/api/v1/profile (GET)

## Category

- https://book-stacker-backend.vercel.app/api/v1/categories/create-category (POST)
- https://book-stacker-backend.vercel.app/api/v1/categories (GET)
- https://book-stacker-backend.vercel.app/api/v1/categories/b3e862e3-274c-4037-93dc-c339c9fc5a9a (Single GET) (Only admin)
- https://book-stacker-backend.vercel.app/api/v1/categories/b3e862e3-274c-4037-93dc-c339c9fc5a9a (PATCH)
- https://book-stacker-backend.vercel.app/api/v1/categories/b3e862e3-274c-4037-93dc-c339c9fc5a9a (DELETE)

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
