```javascript
// app/api/middleware.js

export function middleware(request) {
  console.log(request.nextUrl.pathname) // this logs '/products/[id]' instead of '/products/123'
  const { id } = request.params; //params is empty

  if (id) {
    // Perform actions based on the ID
    console.log('Middleware triggered with ID:', id);
    return NextResponse.rewrite(new URL(`/products/${id}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/products/:id',
};

// app/products/[id].js

export default function ProductDetails({ params }) {
  return <div>Product details: {params.id}</div>;
}

// This approach is correct and solve the issue.
// app/api/middleware.js

import { NextResponse } from 'next/server'

export function middleware(request) {
  console.log(request.nextUrl.pathname);
  const url = request.nextUrl.clone();
  const id = request.nextUrl.pathname.split('/')[2];

  if (id) {
    // Perform actions based on the ID
    console.log('Middleware triggered with ID:', id);
    return NextResponse.rewrite(new URL(`/products/${id}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/products/:id',
};

```