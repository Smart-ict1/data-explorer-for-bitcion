# Data explorer for bitcoin 

this project is about creating bitcoin wallets and checking their balance and the balance of any bitcoin address. It also includes the last price of 1 BTC and a graph that shows bitcoin prices for last 30 days.

This project contains several parts:

 * wallet creation: generate a private and public key.
 * balance check: check the balance of a bitcoin address.
 * bitcoin prices: show the price of 1 BTC in last 30 days.

# Prerequisites
To begin you need to:

- Be sure that Node.js installed on your machine. You can download it from here:https://nodejs.org/en/
- code editor, such as Visual Studio Code, Sublime Text, or any other.
- initialize a new node application by entering:
 ```text
 $ npm init 
 ```
# Dependencies:
First,install express which is a routing framework by executing the following code on your command prompt.
  ```text
 $ npm install express --save
 ```
Then install the request package that allows us to send HTTP requests to the bitcoin client by entering the command:

 ```text
 $ npm install request –save
 ```
After that install bitcore-lib which is an open source library that works under the Bitcoin protocol by the command:
 ```text
 $ npm install bitcore-lib –save
 ``` 
finally install node-fetch which is a light-weight module that brings window.fetch to Node.js by the following command:
 ```text
 $ npm install node-fetch
 ```
# What's included
Within the download you'll find the following directories and files: 
```text
data-explorer-for-bitcion/
├── node_modules/
├── public/  
│   ├── BG
│   ├── coindesk-USD-close.csv
│   └── style.css
├──views /
│   ├── index.ejs
│   ├── index1.ejs
│   ├── index2.ejs
│   ├── index3.ejs
│   ├── index4.ejs
│   └── index33.ejs
├── app.js
├── package.json
├── package-lock.json
└── README.md
```
# Running Time
Now we can safely run our project. It is as simple as running the following command:
```text
 $ node app.js
```
you can also run your program by using the command “npm start”, you can customize the behavior of the “npm start” by adding it to the scripts element in your package.json with the following commande:
```text
 $ npm install start --save
```
When you call “http://localhost:80/” in your browser, you will see the application.

