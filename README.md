# Next.js 15 App Router: Unexpected Middleware Behavior with Dynamic Routes

This repository demonstrates an unexpected behavior encountered when using middleware with dynamic routes in the Next.js 15 App Router.  The issue involves the `params` object not being properly populated within the middleware function.

## Bug Description

When a dynamic route is accessed, the middleware function does not receive the expected parameters. This leads to incorrect behavior and potentially broken functionality.  The `params` object is expected to contain route parameters, but it remains empty or undefined.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to a dynamic route (e.g., `/products/123`).
5. Observe that the middleware does not function as expected due to the missing `params`.

## Expected Behavior

The middleware function should receive the route parameters (`params` object) containing the dynamic segment's value (e.g., `{ id: '123' }`).

## Actual Behavior

The middleware function's `params` object is empty or undefined, leading to incorrect logic and potential errors.

## Solution

The solution involves ensuring the middleware is correctly configured to access the dynamic route parameters.  This typically involves proper route definition and potentially adjustments to the middleware function itself.  Check the `bugSolution.js` for a corrected implementation.