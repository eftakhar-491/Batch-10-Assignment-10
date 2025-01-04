# VisaEase Backend API

This is the backend API for the VisaEase platform, providing robust functionality for managing visas, user feedback, and visa applications. Built with scalability and security in mind, the API supports seamless integration for any visa processing service.

## Features

- **CRUD Operations for Visas**: Create, Read, Update, and Delete visa details with secure endpoints.
- **Feedback Management**: Allow users to submit feedback and retrieve feedback data for analytics.
- **Visa Application Management**: Manage visa application lifecycles, from

## API Endpoints

### Visa Management

- **GET /api/visas** - Retrieve all visas.
- **GET /api/visas/:id** - Retrieve details of a specific visa by ID.
- **POST /api/visas** - Create a new visa record.
- **PUT /api/visas/:id** - Update an existing visa record.
- **DELETE /api/visas/:id** - Delete a visa record.

### Feedback Management

- **GET /api/feedback** - Retrieve all feedback submissions.
- **POST /api/feedback** - Submit new user feedback.

### Visa Application Management

- **GET /api/applications/email** - Retrieve all visa via email auth applications.
- **GET /api/applications/:id** - Retrieve details of a specific visa application by ID.
- **POST /api/applications** - Submit a new visa application.
- **PUT /api/applications/:id** - Update an existing visa application.
- **DELETE /api/applications/:id** - Delete a visa application.
