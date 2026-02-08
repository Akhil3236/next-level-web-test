## Overview
This is a minimal Next.js backend-focused assignment demonstrating
basic authentication and role-based access control.

## Authentication
Authentication is simulated using a request header (`x-user-id`)
to keep the focus on authorization logic.

## Authorization
Role-based access is enforced in the API route by checking the
user's role before allowing access.

## Project Structure
- lib/ - auth and role logic
- app/api - protected API routes

## API Authorization Scenarios

The following screenshots demonstrate how role-based access control
is enforced on the protected API route.

### 1. No user logged in (401 Unauthorized)
When no authentication information is provided, the API returns `401 Unauthorized`.

![Unauthorized - No User](./screenshots/unauthorized-no-user.png)

---

### 2. User logged in without admin role (403 Forbidden)
When an authenticated user without the required role accesses the endpoint,
the API returns `403 Forbidden`.

![Forbidden - User Role](./screenshots/forbidden-user-role.png)

---

### 3. Admin user logged in (200 Success)
When an authenticated admin user accesses the endpoint,
the request succeeds and returns the expected response.

![Success - Admin Access](./screenshots/success-admin.png)


## Improvements
With more time, this could be extended using:
- JWT-based authentication
- Database-backed users
- Middleware-based auth checks

