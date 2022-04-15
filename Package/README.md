## Aveon NPM Package Walkthrough

## What is this?
 - Aveon is an open sourced,decentralized DataBase & Secure Auth provider for Web3 Development.
 - Based on GunDB, Aveon aims to provide goodness of decentralization and high security with minimal setup.

## Purpose of this?
 - The purpose of starting this project is to apply the concept of decentralization without actually using complex blockchains and solidity and stuff,To study decentralization and speculate the capacity of P2P networks and of course to provide a tool with better security than standard databases like MySql,MongoDb,etc.

 - Basically to speculate if an easier and highly secure counterpart of blockchain is possible or not?


## How to use??

### Its super easy to use this package :D

#### 1. Step1: ```npm i aveon```

#### 2. Step2: ```Checkout our code snippets below to understand the code usage```


## Code Examples

#### Note: At the moment we have Basic Auth functions like Register,Login,Update and we will soon release functions for storing user relations.


## **_How to Register??_**

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

2.**UUID**: UUID is basically anything which uniquely identifies a user, in case of apps which have access to system informtion UUID can be Hardware UUID and for websites it can be browser UUID of the user and a part of which will be used as a key for encrypting their CAT(ClientAccessToken). The part to be used as a key is determined by the developer using the package.

3.**CutUUIDFrom**: The parameter to be given by the developer for deciding from which index to begin UUID slicing.

4.**CutUUIDTo**: The parameter to be given by the developer for deciding till which index the UUID should be sliced.

5.**RecoverySecret**: Just a secret phrase or key to be given by the developer which will be mixed with arbitary generation of each user's recovery document and URK(UserRecoveryKey).

- Parameters All Set!

- Now what we gonna do is set a variable to our RegisterUser function,pass the parameters in proper sequence to the function and then add a ```.then``` block to the variable to receive the returned promise which includes CAT and URK. The developer is expected to send both of these to the frontend.

- Just make it clear CAT to be stored in user's device and URK to be stored in user's brain.

- Registeration all done HAHA!



## **_How to Login??_**

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

2. **UUID**: UUID is again basically anything which uniquely identifies a user, in case of apps which have access to system informtion UUID can be Hardware UUID and for websites it can be browser UUID.

3. **CutUUIDFrom**: The parameter to be given by the developer for deciding from which index to begin UUID slicing.

4. **CutUUIDTo**: The parameter to be given by the developer for deciding till which index the UUID should be sliced.

#### NOTE- Please make sure that UUID, CutUUIDFrom and CutUUIDTo parameter were same for a specific user during their registeration and login process.

- Parameters all set!

- Now what we gonna do is set a variable to our Loginuser function,pass the parameters in proper sequence to the function and then add a ```.then``` block to the variable to receive the returned promise which includes username of the user.

- Login all done HAHA!


## **_How to Update??_**
 
#### Update the Username
```js
const aveon = require("aveon")

const EncCAT = "U2FsdGVkX18RwW3XquEpiGO0vGRvwdQBjIKumevo6/AHwPzrF/OMqKB9+PonIf+7tgJFv2jC1lP9IYEbX49CEDHiWK/MPUiNq6DywPperM/EwvQcIlcB4Bk988bkA6KY"
const UUID = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const cutuuidfrom = 2
const cutuuidto = 31
const UpdatedUname = "NewUsername"

const updateun = aveon.UpdateUserName(UpdatedUname,EncCAT,UUID,cutuuidfrom,cutuuidto)

UpdateUnData = updateun.then(l=>{

    console.log(l)
})
```
#### Parameters to be given to UpdateUserName Function:

1. **UpdatedUname**: Basically the new username which user wishes to use. 

2. **EncCat**: EncCat is basically Encrypted CAT which we stored on user's device during Registeration process.

3. **UUID**: UUID is again basically anything which uniquely identifies a user, in case of apps which have access to system informtion UUID can be Hardware UUID and for websites it can be browser UUID.

4. **CutUUIDFrom**: The parameter to be given by the developer for deciding from which index to begin UUID slicing.

5. **CutUUIDTo**: The parameter to be given by the developer for deciding till which index the UUID should be sliced.

- Parameters all set!

- Now what we gonna do is set a variable to our UpdateUserName function,pass the parameters in proper sequence to the function and then add a ```.then``` block to the variable to receive the returned promise which includes a simple string message "username updated".

- username updated!Cheers!


#### Update the Mail
```js
const aveon = require("aveon")

const EncCAT = "U2FsdGVkX18RwW3XquEpiGO0vGRvwdQBjIKumevo6/AHwPzrF/OMqKB9+PonIf+7tgJFv2jC1lP9IYEbX49CEDHiWK/MPUiNq6DywPperM/EwvQcIlcB4Bk988bkA6KY"
const UUID = "uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd"
const cutuuidfrom = 2
const cutuuidto = 31
const UpdatedMailID = "NewMail@test.com"


const updatemail = aveon.UpdateMail(UpdatedMailID,EncCAT,UUID,cutuuidfrom,cutuuidto)

UpdateMaData = updatemail.then(k=>{

    console.log(k)
})
```
#### Parameters to be given to UpdateMail Function:

1. **UpdatedMailID**: Basically the new mail which user wishes to use. 

2. **EncCat**: EncCat is basically Encrypted CAT which we stored on user's device during Registeration process.

3. **UUID**: UUID is again basically anything which uniquely identifies a user, in case of apps which have access to system informtion UUID can be Hardware UUID and for websites it can be browser UUID.

4. **CutUUIDFrom**: The parameter to be given by the developer for deciding from which index to begin UUID slicing.

5. **CutUUIDTo**: The parameter to be given by the developer for deciding till which index the UUID should be sliced.

#### NOTE- Please make sure that UUID, CutUUIDFrom and CutUUIDTo parameter were same for a specific user during their registeration and login process.

- Parameters all set!

- Now what we gonna do is set a variable to our UpdateMail function,pass the parameters in proper sequence to the function and then add a ```.then``` block to the variable to receive the returned promise which includes a simple string message "mail updated".

- mail updated!Cheers!


## **_How to Add/Fetch User Relations??_**

- In case with Aveon, User Relations are defined as every single property linked to a single user on the social network of developer who is developing with Aveon package.

- For example: User's About me, User's Profile Picture, User's friend list or following list,etc

- With Aveon, developer has freedom to put in any user relation of their choice by simply creating a json object of the relation and passing it to methods. Lets take a look at Adding Relations below

#### Add Relations

```js
const aveon = require('aveon')

const RelationsObj = {UserPfp: "pfpPOGGIES",Userbio: "bioXD",UserFollowings: "FOLLOWING SHEESH"}

const EncCat = "U2FsdGVkX1+V3qcqmv7fyqwgDsgshuar45mMiaHR61wuTlyxoJ7L7YPGiw365d294FskLKVXpixLsgIgAOPOLCWpK+osU9nfPEAyea7QY0izvZr1ujJt+LdbAngIWVkg"
const uuid = 'uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd'
const cutuuidfrom = 2
const cutuuidto = 31

const addrel = aveon.AddUserRelations(RelationsObj,EncCat,uuid,cutuuidfrom,cutuuidto)

addedresult = addrel.then(x=>{console.log(x)})

console.log(addedresult)
```
#### Parameters to be given to AddUserRelations Function:

1. **RelationsObj**: Basically all user relations which I am storing in above example with a specific user like user's pfp reference, user's bio and user's following and I hope you all can notice that I or anyone using this package as a developer has freedom to put any form of user relation within the object and then pass that whole object to add function.

2. **EncCat**: EncCat is basically Encrypted CAT which we stored on user's device during Registeration process.

3. **uuid**: UUID is again basically anything which uniquely identifies a user, in case of apps which have access to system informtion UUID can be Hardware UUID and for websites it can be browser UUID.

4. **CutUUIDFrom**: The parameter to be given by the developer for deciding from which index to begin UUID slicing.

5. **CutUUIDTo**: The parameter to be given by the developer for deciding till which index the UUID should be sliced.

#### NOTE- Please make sure that UUID, CutUUIDFrom and CutUUIDTo parameter were same for a specific user during their registeration and login process.

- Parameters all set!

- Now what we gonna do is set a variable to our AddUserRelations function,pass the parameters in proper sequence to the function and then add a ```.then``` block to the variable to receive the returned promise which includes a simple string message "Added passed user relations".

- user-relations added!Cheers!


#### Fetch Relations
```js
const aveon = require('aveon')


const cat = "U2FsdGVkX1+V3qcqmv7fyqwgDsgshuar45mMiaHR61wuTlyxoJ7L7YPGiw365d294FskLKVXpixLsgIgAOPOLCWpK+osU9nfPEAyea7QY0izvZr1ujJt+LdbAngIWVkg"
const uuid = 'uuidbyjay12d12d2d12dh182d9129d2udzd129dz20d29dd'

const fetchdata = aveon.FetchUserRelations(cat,uuid,2,31)

fetchedresult = fetchdata.then(x=>{console.log(x)})
console.log(fetchedresult)
```
#### Parameters to be given to FetchUserRelations Function:

1. **EncCat**: EncCat is basically Encrypted CAT which we stored on user's device during Registeration process.

2. **uuid**: UUID is again basically anything which uniquely identifies a user, in case of apps which have access to system informtion UUID can be Hardware UUID and for websites it can be browser UUID.

3. **CutUUIDFrom**: The parameter to be given by the developer for deciding from which index to begin UUID slicing.

4. **CutUUIDTo**: The parameter to be given by the developer for deciding till which index the UUID should be sliced.

#### NOTE- Please make sure that UUID, CutUUIDFrom and CutUUIDTo parameter were same for a specific user during their registeration and login process.

- Parameters all set!

- Now what we gonna do is set a variable to our AddUserRelations function,pass the parameters in proper sequence to the function and then add a ```.then``` block to the variable to receive the returned promise which includes the user relations object which was added with the help of add function.

- user-relations fetched! It is simple as that :D


## **_How to store any type of data?_**

- Apart from Secure Auth abilities,Aveon also provides the developer with an option to store whatever they wish to in form of JSON Object.

- We are still planning out this feature and will be rolled out soon!</br>Stay Tuned to our [twitter](https://twitter.com/AveonJS?s=20&t=VthMNi8g5QVt0egC8Y_q1g) or our [mail](contactaveon@gmail.com) us your questions :D

**Example**:

```js









```



## It is my humble request to all the developers using the package to please contribute and improvise this package if needed.

## Thank you.
