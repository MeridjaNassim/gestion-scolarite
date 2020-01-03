# Gestion-Scolarite

A MERN web application for the tuition management in a school (ESI School project)

# How To setup :

First make sure you have NodeJS ^v12.13 installed on your machine

## Launching client App

   <ol>
      <li>Open a terminal.</li>
      <li>cd client</li>
      <li>npm install</li>
      <li>to run client : npm start</li>
      <li>open browser on : localhost:3000</li>
   </ol>

## Launching Microservices

First make sure you have Docker installed and Docker daemon running
   <ol>
      <li>Open a terminal.</li>
      <li>cd server</li>
      <li>run : docker-compose up --build ( it might take a while because of downloads)</li>
      <li>make requests through : localhost:8080 ( the API gateway)</li>
   </ol>
   
## Unit Tests

First make sure microservices are running
   <ol>
      <li>Open a terminal.</li>
      <li>cd server/gateway</li>
      <li>run : Mocha or npm test</li>
   </ol>
   
## Selenium Test :

Read "how to launch.txt" provided in the selenium folder

## Client Side documentation :

You can find it in the client/docs folder in html format

## Server Side documentation :
First run the microservices , then hit this url : localhost:8080/api-docs

# Contributors : 
   *Meridja Nassim - 1CS G6 Student at ESI
   *Boudis Madjid - 1CS G6 Student at ESI
   
