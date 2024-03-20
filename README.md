# ThaiID CSV Reader
This project works by passing data from a CSV file obtained from the ThaiID ID card reader program and then displaying it on a web page and allowing additional information to be recorded into the database system.

## Demo
https://demo.centercore.org/ThaiID-CSV-Reader/

Test user
- user: test
- password: 0000

## Tech Stack
**Front-End:** Angular 17, HTML, CSS,

**Back-End:** PHP 8.3.0, TypeScript, JavaScript

**Server:** IIS, MariaDB 10.11


## Deployment
System Requirement
- php 8.3.0
- Angular 17
- MariaDB 10.11
- IIS
- NodeJS

Setting PATH location for link system file
- Location file : "src\app\services\services.service.ts"

```bash
    # Choose according to your web server settings.
    backendURL: string = 'http://localhost:5000/ThaiID-Backend/';
    viewOneURL: string = 'http://localhost:4200/viewone';
```

Setting Database connection
- Location file : "ThaiID-Backend/.env"

```bash
    # Choose according to your database settings.
    DBHOST=""
    DBUSER=""
    DBPASS=""
    DBNAME="thaiid"
```

Setting ThaiID Card Reader Program
- Program : ThaiID 1.41
- Location save to : "ThaiID-Backend/"
- Hardware : HawkEye ThaiID TFK2700RB
- Download : "https://rd-comp.com/downloads/solution-program/"
- buy at : "https://rd-comp.com/product/tfk2700rb/"

To test run this project

```bash
  $ ng s -o
```

To build file

```bash
  $ ng build
```