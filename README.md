# Document Scanner Application Backend

This project consists of a backend developed with Spring Boot using Java and PostgreSQL as the database. The application manages users and tracks the history of scans associated with each user.

## Technologies used

- Spring Boot
- Java
- PostgreSQL

## Prerequisites

Before you start, make sure you have installed the following :

- Java JDK
- Maven
- PostgreSQL

## Installation

1. Clone this repository on your local machine.
2. Configure your PostgreSQL database using the information provided in `src/main/resources/application.properties`.
3. Run the application using Maven :

\`\`\`bash
mvn spring-boot:run
\`\`\`

The application will be accessible at `http://localhost:8080`.

## Usage

### Endpoints available

#### Users

- **GET /users** : Retrieves a list of all users.
- **GET /users/{userId}** : Retrieves details of a specific user.
- **PUT /users/{userId}** : Updates the details of a specific user.
- **DELETE /users/{userId}**: Deletes a specific user.

#### Scans

- **GET /scans**: Retrieves the history of all scans.
- **GET /scans/{userId}**: Retrieves scan history for a specific user.

### Testing with Postman
To test endpoints with Postman :

1. Download and install Postman from [https://www.postman.com/downloads/](https://www.postman.com/downloads/).
2. Import the collection of Postman queries located in the `postman` folder of this repository.
3. Test the various queries using the endpoints mentioned above.

## Contributions

Contributions are welcome! Feel free to open an issue to report a bug or propose a new feature by submitting a pull request.
