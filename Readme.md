# Calculator v.1.2

This is a simple calculator application.

# three patterns that I use
1) simple factory (src/js/calculator/init.js line 6);;
2) singleton (src/js/calculator/operation.js line 2);
3) module pattern (src/js/calculator/eventCalc.js line 25  we export our calcEvent which will become an importable module.)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to install:

```
npm
```
```
node.js
```

### Installing

Clone Repository

```
https://github.com/Soslan93/calc2.0.git
```
Go to project folder
```
cd code
```
Install dependencies
```
npm install
```
Start project
```
npm run watch:prod or npm run build:prod or npm run build:dev or npm run start
```
## Deployment
Webpack имеет две сборки: 
a.	dist/prod:
    i.	запускается с помощью команды «npm run build:prod»  
    ii.	все файлы минифицируются
    iii.	в index.html выводиться «Production mode» в заголовке (делается через webpack, плагин HtmlWebpackPlugin) 
b.	dist/dev:
    i.	запускается с помощью команды «npm run build:dev»
    ii.	все файлы собираются в один, но не минифицируются
    iii.	в index.html выводиться «Development mode» в заголовке

Проект включает в себя унарный минус, а также журнал, чтобы запустить журнал нажмите на checkbox, чтобы сбросить значения отключите журнал.

the project uses ES6 features:
1) const (define calculate1, calculate2 as a constant src/js/app.js line 9,8; src/js/calculator/operation.js line 1);
2) let (declares a block scope local variable src/js/calculator/calc.js line 5);
3) class (The class declaration creates a new class with a given name using prototype-based inheritance. src/js/calculator/init.js, src\js\calculator\operation.js line 2);
4) arrow function (An arrow function expression has a shorter syntax than a function expression, src/js/calculator/get-input.js line 3, 21, 30);
5) import (The import statement is used to import bindings which are exported by another module. src/js/calculator/get-input.js line 1, src/js/app.js line 1,2,3);
6) export (Instruction is used to export functions, objects, or primitives from the module. src/js/calculator/get-input.js line 3, 21, 30)

## Built With

* [Webpack](https://webpack.js.org/)
* [Bootstrap](https://getbootstrap.com/)
* [SCSS](https://sass-lang.com/)
* [JavaScript](https://www.javascript.com/)
* [Docker](https://www.docker.com/)
* [Babel](https://babeljs.io/)
## Authors

* **Soslan Kulumbekov** - *Initial work*