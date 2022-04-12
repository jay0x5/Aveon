### Aveon NPM Package Walkthrough

## What is this?
 - Aveon is an open sourced, decentralized backend querying and data storing system being developed for better security than central databases based on GunDB.

## Purpose of this?
 - The purpose of starting this project is to apply the concept of decentralization without actually using complex blockchains and solidity and stuff,To study decentralization and speculate the capacity of P2P networks and of course to provide a tool with better security than standard databases like MySql,MongoDb,etc.

 - Basically to speculate if an easier and highly secure counterpart of blockchain is possible or not?


## How to use??

 - Its super easy to use this package :D

### 1. Step1: ```npm i aveon```

### 2. Step2: ```Checkout our code snippets below to understand the code usage```


## Code Examples

### At the moment we have Register and login functions, but we are working on releasing other functions like update and delete too :D

**_How to Register??_**

```js
const aveon = require('aveon')

const username = "testuserbyjay"
const password = "passwordbyjay"
const mail = "mailbyjay"
const uuid = 'uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd'
const cutuuidfrom = 2
const cutuuidto = 31
const recoverysecret = "recoverysecretbyjay"

var RegisterVariable = aveon.RegisterUser(username,password,mail,uuid,cutuuidfrom,cutuuidto,recoverysecret)

RegisterData = RegisterVariable.then(x=>
    {
        console.log(x) // will print out the Json object with CAT token and URK token which is supposed to be sent to the user [CAT to be stored in user's device and URK to be stored in user's brain]  
    
    
    })


```
