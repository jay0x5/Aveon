### Aveon NPM Package Walkthrough

## What is this?
 - Aveon is an open sourced, decentralized backend querying and data storing system being developed for better security than central databases based on GunDB.

## Purpose of this?
 - The purpose of starting this project is to apply the concept of decentralization without actually using complex blockchains and solidity and stuff,To study decentralization and speculate the capacity of P2P networks and of course to provide a tool with better security than standard databases like MySql,MongoDb,etc.

 - Basically to speculate if an easier and highly secure counterpart of blockchain is possible or not?


## How to use??

### Its super easy to use this package :D

#### 1. Step1: ```npm i aveon```

#### 2. Step2: ```Checkout our code snippets below to understand the code usage```


## Code Examples

### At the moment we have Register and login functions, but we are working on releasing other functions like update and delete too :D

#### **_How to Register??_**

```js

//imports
const aveon = require('aveon') 

//important variables
const username = "testuserbyjay"
const password = "passwordbyjay"
const mail = "mailbyjay"
const uuid = 'uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd'
const cutuuidfrom = 2
const cutuuidto = 31
const recoverysecret = "recoverysecretbyjay"

//lets put aveon to work
var RegisterVariable = aveon.RegisterUser(username,password,mail,uuid,cutuuidfrom,cutuuidto,recoverysecret)

//lets get back important piece of data
RegisterData = RegisterVariable.then(x=>
    {
        console.log(x) // will print out the Json object with CAT token and URK token which is supposed to be sent to the user [CAT to be stored in user's device and URK to be stored in user's brain]  
    })

//BOOM! registeration of user done right there!!!
```

#### **_How to Login??_**

```js
const aveon = require('aveon')
// const dotenv = require('dotenv');
// dotenv.config({path: './.env'})


const EncCAT = "U2FsdGVkX192A5+OVJGvng/yyuYopvBHaVP26kfQ0VVww6YoaCcc1DN3oYtg2lBsX5k2ErysvjGf5wD/WFocbifnDViXig9fpZ1pjtfLTPwwg1cFhlmIhGAxedrMpwXG" //example of a encrypted cat
const UUID = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd" //some UUID which i used for this user
const cutuuidfrom = 2 //my decision to cut UUID from 2,feel free to play with above values
const cutuuidto = 31 // my decision to cut UUID till 31,feel free to play with above values

//Note: UUID cutting parameters should be same while registering and login a specific user

const Loginvariable = aveon.Loginuser(EncCAT,UUID,cutuuidfrom,cutuuidto)

LoginData = Loginvariable.then(u=>{

    //console.log(u)
    console.log("Logged in: " + u.LoggedinAs) // Logged in as testusernamebyjay
})


//BOOM! login done!!!
```