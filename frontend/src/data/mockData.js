export const apiData = {
  introduction: {
    title: "Introduction",
    description: "Welcome to our comprehensive API documentation. This guide will help you integrate our powerful API into your applications.",
    content: `
## Getting Started

Our API provides a robust set of endpoints to manage users, authenticate requests, and handle data operations. All endpoints return JSON responses and use standard HTTP response codes.

### Base URL
\`\`\`
https://api.yourservice.com/v1
\`\`\`

### Rate Limiting
- 1000 requests per hour for authenticated users
- 100 requests per hour for unauthenticated requests

### Support
For support, please contact us at support@yourservice.com or visit our community forum.
    `
  },
  authentication: {
    title: "Authentication",
    description: "Learn how to authenticate your requests using API keys and OAuth 2.0.",
    content: `
## API Key Authentication

Include your API key in the Authorization header:

\`\`\`http
Authorization: Bearer your-api-key-here
\`\`\`

## OAuth 2.0

For more secure access, use OAuth 2.0 flow:

1. Redirect users to authorization endpoint
2. Exchange authorization code for access token
3. Use access token in subsequent requests

### Authorization URL
\`\`\`
https://api.yourservice.com/oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI
\`\`\`
    `,
    endpoint: {
      method: "POST",
      path: "/auth/token",
      description: "Exchange credentials for access token"
    },
    codeExamples: {
      curl: `curl -X POST https://api.yourservice.com/v1/auth/token \\
  -H "Content-Type: application/json" \\
  -d '{
    "grant_type": "client_credentials",
    "client_id": "your_client_id",
    "client_secret": "your_client_secret"
  }'`,
      javascript: `const response = await fetch('https://api.yourservice.com/v1/auth/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    grant_type: 'client_credentials',
    client_id: 'your_client_id',
    client_secret: 'your_client_secret'
  })
});

const data = await response.json();`,
      python: `import requests

response = requests.post('https://api.yourservice.com/v1/auth/token', json={
    'grant_type': 'client_credentials',
    'client_id': 'your_client_id',
    'client_secret': 'your_client_secret'
})

data = response.json()`
    }
  },
  users: {
    title: "Users",
    description: "Manage user accounts and profiles.",
    content: `
## User Management

Create, retrieve, update, and delete user accounts through our user endpoints.

### User Object

A user object contains the following fields:

- **id** (string): Unique identifier
- **email** (string): User's email address
- **name** (string): Full name
- **created_at** (string): ISO 8601 timestamp
- **updated_at** (string): ISO 8601 timestamp
    `,
    endpoint: {
      method: "GET",
      path: "/users/{id}",
      description: "Retrieve a specific user by ID"
    },
    codeExamples: {
      curl: `curl -X GET https://api.yourservice.com/v1/users/123 \\
  -H "Authorization: Bearer your-api-key"`,
      javascript: `const response = await fetch('https://api.yourservice.com/v1/users/123', {
  headers: {
    'Authorization': 'Bearer your-api-key'
  }
});

const user = await response.json();`,
      python: `import requests

headers = {'Authorization': 'Bearer your-api-key'}
response = requests.get('https://api.yourservice.com/v1/users/123', headers=headers)
user = response.json()`
    }
  },
  data: {
    title: "Data Operations",
    description: "Perform CRUD operations on your data resources.",
    content: `
## Data Management

Our data endpoints allow you to create, read, update, and delete various resources in your application.

### Supported Operations

- **CREATE**: Add new resources
- **READ**: Retrieve existing resources
- **UPDATE**: Modify existing resources
- **DELETE**: Remove resources

### Pagination

All list endpoints support pagination:

- **limit**: Maximum number of items (default: 20, max: 100)
- **offset**: Number of items to skip (default: 0)
    `,
    endpoint: {
      method: "POST",
      path: "/data",
      description: "Create a new data resource"
    },
    codeExamples: {
      curl: `curl -X POST https://api.yourservice.com/v1/data \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Sample Resource",
    "description": "This is a sample data resource",
    "category": "example"
  }'`,
      javascript: `const response = await fetch('https://api.yourservice.com/v1/data', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Sample Resource',
    description: 'This is a sample data resource',
    category: 'example'
  })
});

const result = await response.json();`,
      python: `import requests

headers = {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
}

data = {
    'name': 'Sample Resource',
    'description': 'This is a sample data resource',
    'category': 'example'
}

response = requests.post('https://api.yourservice.com/v1/data', headers=headers, json=data)
result = response.json()`
    }
  }
};

export const sidebarItems = [
  { id: 'introduction', title: 'Introduction', icon: 'BookOpen' },
  { id: 'authentication', title: 'Authentication', icon: 'Lock' },
  { id: 'users', title: 'Users', icon: 'Users' },
  { id: 'data', title: 'Data Operations', icon: 'Database' }
];