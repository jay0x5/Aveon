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

#### Note: At the moment we have Register and login functions, but we are working on releasing other functions like update and delete too :D

### **_How to Register??_**

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
        console.log(x)   
    })

//BOOM! registeration of user done right there!!!
```

### Code-Explanation =>

- Firstly we are importing/requiring the aveon package
- Then we set some parameter variables which are supposed to be passed to the Register Function.Lets understand what parameters are being passed to the function and why?

#### Parameters to be given to Register Function:

1.**Username**,**Password**,**Mail**: I hope you all know why these 3 are important.

2.**UUID**: UUID is basically hardware id of the user and a part of which will be used as a key for encrypting their CAT(ClientAccessToken). The part to be used as a key is determined by the developer using the package.

3.**CutUUIDFrom**: The parameter to be given by the developer for deciding from which index to begin UUID slicing.

4.**CutUUIDTo**: The parameter to be given by the developer for deciding till which index the UUID should be sliced.

5.**RecoverySecret**: Just a secret phrase or key to be given by the developer which will be mixed with arbitary generation of each user's recovery document and URK(UserRecoveryKey).

- Parameters All Set!

- Now what we gonna do is set a variable to our RegisterUser function,pass the parameters in proper sequence to the function and then add a ```.then``` block to the variable to receive the returned promise which includes CAT and URK. The developer is expected to send both of these to the frontend.

- Just make it clear CAT to be stored in user's device and URK to be stored in user's brain.

- Registeration all done HAHA!



#### **_How to Login??_**

```js
const aveon = require('aveon')

const EncCAT = "U2FsdGVkX192A5+OVJGvng/yyuYopvBHaVP26kfQ0VVww6YoaCcc1DN3oYtg2lBsX5k2ErysvjGf5wD/WFocbifnDViXig9fpZ1pjtfLTPwwg1cFhlmIhGAxedrMpwXG" 
const UUID = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd" 
const cutuuidfrom = 2 
const cutuuidto = 31 

const Loginvariable = aveon.Loginuser(EncCAT,UUID,cutuuidfrom,cutuuidto)

LoginData = Loginvariable.then(u=>{

    //console.log(u)
    console.log("Logged in: " + u.LoggedinAs) // Logged in as testusernamebyjay
})
```
### Code-Explanation =>

- Firstly we are importing/requiring the aveon package
- Then we set some parameter variables which are supposed to be passed to the Login Function.Lets understand what parameters are being passed to the function and why?

#### Parameters to be given to Login Function:

1. **EncCat**: EncCat is basically Encrypted CAT which we stored on user's device during Registeration process.

2. **UUID**: UUID is again the hardware ID of the specific user.

3.**CutUUIDFrom**: The parameter to be given by the developer for deciding from which index to begin UUID slicing.

4.**CutUUIDTo**: The parameter to be given by the developer for deciding till which index the UUID should be sliced.

#### NOTE- Please make sure that 2nd 3rd and 4th parameter were same for a specific user during their registeration and login process.

- Parameters all set!

- Now what we gonna do is set a variable to our Loginuser function,pass the parameters in proper sequence to the function and then add a ```.then``` block to the variable to receive the returned promise which includes username of the user.

- Login all done HAHA!


## It is my humble request to all the developers using the package to please contribute and improvise this package if needed.
