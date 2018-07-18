# Calculator v.1.2

This is a simple calculator application.

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
## Built With

* [Webpack](https://webpack.js.org/)
* [Bootstrap](https://getbootstrap.com/)
* [SCSS](https://sass-lang.com/)
* [JavaScript]
* [Docker](https://www.docker.com/)
* [Babel](https://babeljs.io/)
## Authors

* **Soslan Kulumbekov** - *Initial work*