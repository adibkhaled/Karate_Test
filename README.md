# Karate REST API Testing Project

This project contains API tests written using the Karate framework.

## Prerequisites

- Java JDK 18 or higher
- Maven
- Valid API credentials and base URL

## Running the Tests

To run the API tests, use the following command:

```bash
API_USER=myUser API_PASSWORD=myPass API_BASE_URL=https://api-test.example.com mvn clean test -Dkarate.env=test
```

This command:
- Sets the API credentials (`API_USER` and `API_PASSWORD`)
- Sets the base URL for the API (`API_BASE_URL`)
- Runs Maven clean and test phases
- Uses the test environment configuration (`-Dkarate.env=test`)

## Environment Variables

The following environment variables need to be set:

- `API_USER`: Your API username
- `API_PASSWORD`: Your API password
- `API_BASE_URL`: The base URL of the API endpoint

You can modify these values according to your environment requirements.
