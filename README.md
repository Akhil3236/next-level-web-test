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

## Improvements
With more time, this could be extended using:
- JWT-based authentication
- Database-backed users
- Middleware-based auth checks
# next-level-web-test
