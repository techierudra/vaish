# E-Crime Report Hub: Online FIR Filing and Case Management System

The E-CRIME REPORT HUB represents a technological advancement aimed at revolutionizing the conventional method of filing First Information Reports (FIRs) and managing crime-related incidents. This project endeavors to bridge the gap between victims of crimes and law enforcement agencies by introducing an intuitive and accessible online platform that facilitates seamless FIR filing and efficient case management.

At its core, the E-CRIME REPORT HUB is designed to alleviate the constraints associated with the traditional manual filing process. Leveraging modern web technologies, including React for the frontend, and Spring Boot for the backend, the platform offers users a user-friendly interface for registration, FIR filing, and access to comprehensive crime-related information. Client-side validations are implemented using JavaScript, ensuring the accuracy and completeness of the entered data.

The platform's functionality is rooted in its ability to cater to the diverse needs of users. Victims, irrespective of geographical limitations, can register accounts, file FIRs, and seek guidance through informative articles categorized according to various crime types. User registration entails comprehensive validations utilizing JavaScript, ensuring the accuracy and completeness of the entered data.

Central to the platform's architecture is the utilization of MySQL for robust data management, storing user details and FIR records securely. Each filed FIR undergoes meticulous validation against predefined criteria, ensuring the authenticity and completeness of the report.

The project’s testing phase involved rigorous manual testing methodologies encompassing positive and negative scenarios. Positive testing verified the system's response to valid inputs, ensuring successful registration and FIR filing, while negative testing focused on error handling and the system’s behavior when encountering invalid inputs or incomplete data.

Future enhancements of the E-CRIME REPORT HUB might include the integration of automated testing methodologies, thereby augmenting the efficiency of the testing process and expanding test coverage. Additionally, potential improvements could involve enhancing user interfaces, refining data validation algorithms, and introducing multi-factor authentication for heightened security.

In conclusion, the E-CRIME REPORT HUB stands as a testament to innovation in the realm of law enforcement technology. Through seamless user interactions, robust data management, and comprehensive validations, this platform endeavors to empower victims and law enforcement agencies in addressing and managing crimes effectively in a digitally connected world.

## Tech Stack
* Java EE
* MySQL Database
* Node.js
* React, CSS, JavaScript

## Libraries and Packages
* React libraries
* Spring Boot
* Spring Data JPA
* Hibernate
* Spring Web
* MySQL driver
* CSS-Bootstrap

## Tools

* Spring Tool Suite (STS)
* Visual Studio Code (VSCode)
* Postman for API testing



## HOW TO RUN THE FRONTEND APPLICATION
* STEP1: Download code zip file
* STEP2: Extract in some Directory (note**  Backend code included in the same zip file)
* STEP3: Make sure you have node.js installed properly
* STEP4: Open the extracted folder on VsCode > go to new terminal > type "npm start"   
Caution: While running the application for the first time it will give error like 'react-scripts' is not recognized as an internal or external command . To solve this simply type 'npm install react-scripts --save'
* STEP5: re-run the application using npm-start , it will start a dev server on port 3000... A new Website pops up on the browser.


## HOW TO START THE BACKEND SERVER
* STEP1: Open STS(Spring tool Suite)> import project from directory> import the folder 'fullstack backend' that is present inside E-Crime-Report-Hub-Major-Project
folder.
* STEP2: After importing the directory wait for sometime till STS completes the background build and verification.
* STEP3: Go to project Directory and run as spring boot app.
NOTE**  By default backend server will run on port 8080, make sure you dont have any application running on same port i.e 8080 or it will give an error. To fix this you need to manually make the changes of port number in your frontend application , as well as on application properties. 
* STEP4: make the necessary database connection changes like database name,password, ports (note** create a database as ecrh_major beforehand)
* STEP5: Once the server loads up without any error , it will automatically create tables inside that database.
* STEP6: After that open your frontend application that is already opened in your browser and explore our website.

## HOW TO BUILD AND RUN THE APPLICATION USING DOCKER AND DOCKER COMPOSE
* STEP1: Ensure you have Docker and Docker Compose installed on your machine.
* STEP2: Clone the repository and navigate to the project directory.
* STEP3: Build the Docker images and start the containers using Docker Compose:
  ```sh
  docker-compose up --build
  ```
* STEP4: The React frontend will be available at `http://localhost:3000` and the Spring Boot backend will be available at `http://localhost:8080`.

### ERD
![WhatsApp Image 2024-05-20 at 18 09 40_22dda618](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/031f07c9-8121-4297-b453-16c7f54c05bc)

### DATABASE DESIGN
![WhatsApp Image 2024-05-20 at 18 45 48_35601b74](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/63e4e9e8-805a-42d9-b35c-0d6ea940fd0f)

### DFD LVL 0 | CONTEXT LEVEL
![ecrh2](https://github.com/Salvik24Bhowal/e-Crime-Report-Hub/assets/67736824/3c09c9be-ea2c-499f-a805-354c3bb315a1)

### DFD LVL1
![ecrhdfdlvl1](https://github.com/Salvik24Bhowal/e-Crime-Report-Hub/assets/67736824/f33e19dd-9871-4b7d-9b16-2d635dcfd8d6)


## QUICKSHOTS

![image](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/413a79c4-b87f-45e9-8339-b24c3d08e419)
![image](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/701f8f72-ef37-4e01-b19b-a9f3727d1bdb)
![image](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/e692e7b6-9fa3-492e-b793-5c4401cee3a3)

![image](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/becf28ef-b964-4cf0-b650-24dba45d00a0)
![image](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/838aa8ea-e402-434d-a7bd-02a066a9fa32)
![image](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/a6cd879b-e632-4b2e-bb1f-23915999bf2e)
![image](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/2567bad5-9177-4004-afd6-8979c175bb6e)



## ABOUT US
![image](https://github.com/AKA-RONY/E-Crime-Report-Hub-Major-Project/assets/67736824/9f9ecee0-92fe-4dee-ae92-9f245ce5ba27)

