# ThaiID CSV Reader
This project works by passing data from a CSV file obtained from the ThaiID ID card reader program and then displaying it on a web page and allowing additional information to be recorded into the database system.

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

## Demo
https://demo.centercore.org/ThaiID-CSV-Reader/

Test user
- user: test
- password: 0000

## License
MIT License

Copyright (c) 2024 WeerapatNusui

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.