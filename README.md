
# NOTE:

### We are still in a beta program

# Content

- Aveon
- Purpose
- Features
- How it works
- TODO
- Getting Started
  - File Structure
  - Documentation for how to use npm package
  - Documentation for how to run open sourced code
- Future Goals
- Contributions
- Support
- Acknowledgement
- Reach out
- End

 [![Gitter](https://badges.gitter.im/Aveon-Community/Aveon-Chat-Help.svg)](https://gitter.im/Aveon-Community/Aveon-Chat-Help?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

# Aveon is now ```npm i aveonfs```

# Aveon
Aveon is an open sourced,decentralized DataBase & Secure Auth provider for Web3 Development.
Based on IPFS, Aveon aims to provide goodness of decentralization and high security with minimal code setup for authentication purposes like Register,Login,etc.

# Purpose
The purpose of starting this project is to apply the concept of decentralization without actually using complex blockchains and solidity and stuff,To study decentralization and speculate the capacity of P2P networks and of course to provide a tool with better security than standard databases like MySql,MongoDb,etc.

Basically to speculate if an easier and highly secure counterpart of blockchain is possible or not?

# Features
1. ### Scattered Users:
   User Credentials are distributed as unique Documents accross the GunDB Network.
   
2. ### CAT will Login:
   No Cookies,Remember Me or Login input fields but the login part is completely seamless and secured with ClientAccessTokens[CAT] unique to each user.
   
3. ### Distinctive Locks:
   Every piece of user credential and every access key point to useraccounts are encrypted with keys and connected to each user uniquely.
   
4. ### No CounterSpies:
   Our backend and frontend code will just be a intermediary link between Client and GunDB Network, NO SPYWARES INCLUDED!
   
5. ### ACCESS DENIED!!:
   To login into someone's account, you dont need user's credentials but you actually need to manipulate the unique CAT for each account.
   
6. ### NO CENTRAL MESS:
   In a highly unlikely attempt of a credential breach into the network,since the person attempting the breach    will need to have physical access to each user device to actually try to manipulate secured CAT and gain access.

7. ### Secure The package:
   URK and MDT tokens are supposed to be stored in a secure place by the user.
   


# But... How does it work?


![b61466cc462bf5a13fef21ef40b710df](https://user-images.githubusercontent.com/78173760/161983977-625fe5f1-b4c5-4387-be27-3cfcf3b5f4fa.png)

Well its quite simple, At the moment the whole system has 4 key components UAK,URK,CAT,MDT and of course the GUNDB Network</br>
- UAK stands for UserAccessKey and is the actual hash to access user ~~personal~~ data _**credentials_**,used for accessing credentials & relations purpose</br>
- URK stands for UserRecoveryKey and is the actual key ~~linked~~ **_uniquely linked_** to each user on the network,used for recovery purpose.</br>
- CAT stands for ~~User~~ ClientAccessToken and is passed on to user and also holds many **secrets** like UAK,used for accessing UAK.</br>
- MDT stands for Multi Device Token and as the name suggests it is used to let user login to multiple devices without having to worry about ~~remembering~~ their password or anything.</br>
- GunDb network allows distribution of User-Credentials in a ~~Centralized~~ **_Decentralized_** Manner.</br>



## 1. General System Scheme:
![20220414_150137](https://user-images.githubusercontent.com/78173760/163358101-73b72581-6bed-4557-89ee-119c427df9c3.jpg)



  
## 2. Component Scheme:
![struuuuaaaa](https://user-images.githubusercontent.com/78173760/163357910-ae2d69f5-c5ef-4647-9d79-fbbe6f9f73b5.jpg)


# TODOS [Will be updated everytime a task is completed or has been created]

  ## Workspace: Samples folder
### 2] Build a sample app with Aveon's Auth Functions.
 


# Getting Started
  
# File Structure:
   - Initial folder includes the server.js file which is the main code initially built.</br>
   - IPFS-IMPLEMENTATION folder includes main ```index.js``` and subordinate test files,this folder holds the codebase of Aveon which is implemented on IPFS.</br>
   - GUNDB-IMPLEMENTATION folder includes main ```index.js``` and subordinate test files,this folder holds the codebase for deprecated GunDB implementation of Aveon.
   - Samples folder includes all the sample files.

## For developers who want to straight away use our NPM Package, kindly checkout below sources:

 - [blog](https://aveon.hashnode.dev/aveon-authentication-setup)
 - [Github-Documentation](https://github.com/jay0x5/Aveon/blob/83937ba2074fab3166e0af412eda74dd9f4788a9/IPFS-IMPLEMENTATION/README.md)
 - [NPM-Documentation](https://www.npmjs.com/package/aveonfs)
 - Website Documentation soon!


## For Contributors who are gonna contribute to the NPM Package</br>[How to run NPM package code for developement]:
   ## *TOOLS*
   Any Stable versions of NodeJS, I am using Node v16.13
   The code is has been initially built and tested on Windows at the moment, Looking for someone who can handle the Linux Developement for this project
    
   # *Packages*
    npm install express
    npm install dotenv
    npm install uuid
    npm install ipfshttpclient
    npm install crypto-js
    
   # *WHAT THE CODE?!*
   
   Lets see how we can run the code now?


  ### File Structure["Package" folder]:
  - **index.js**: main code file where all the functionalities are being built.</br>

  - **register.js**: test file which imports index.js and is testing its RegisterUser Function.</br>

  - **login.js**: another test file which imports index.js and is testing its LoginUser Function.</br>

  - **package.json**: package file created after npm init.

  - **recovery.json**: file which tests the functionality of recovering CAT tokens for users.

  - **Update.js**: file which tests functionality of Update functions.

  - **Addrelations.js**: file which tests functionality of adding user relation function.

  - **FetchRelations.js**: file which tests functionality of fetching the user relation function.

  - **MDT.js**: file which tests multi-device-token functionality.


  ### Running the code:
   
   For now, I think this is pretty straightforward without any code changes, you can run node filename.js.

   For example:
   Set parameters for registering function in register.js file and then getting the encrypted CAT from the terminal, passing it to login.js and testing login function.In this way you run each method file locally and test it out :D

   Please report any issues via "Issues" or reach out to me :D






<!-- ## For Initial barebone code in Initial folder</br>[Wont be maintained after first package launch]:
 
 ### File Structure["Initial" folder]:
 - **server.js**: main code file, which includes register and login functions which were built for the first time.</br>

 - **query.js**: to check documents by entering respective URK or UAK.

  ### Step1: Git Clone the Repo
    Command: git clone https://github.com/jay0x5/Aveon
        
  ### Step2: Change the environment variable values
   Change all the env snippets according to your use, Following are the lines and related snippets=>
       
   A) Line-96,110: ```process.env.cutfrom``` and ```process.env.to```[the substring start and end parameters to start slicing my UUID string from 'cutfrom' value to 'to' value]</br>
   For Example:
   
    var stringg = "HELLOWORLD"
    console.log(stringg.substring(process.env.cutfrom,process.env.to)) //where i have set cutfrom to as 1 and to as 4
             
   - Result >> ELL 
    
                    
   - As we can see in the above result we got "ELL" after slicing the string.</br>

   - So make sure to change and use the values as per your choice since they will decide the encryption key for your CAT.</br>
   - You can refer to Samples folder for sample of .env file.
           
   B) Line-130 & 131: ```process.env.PORT```[it basically defines on which port is my express server running], So change it to whatever port you guys want to run express server on.
    
   C) Line-76: ```process.env.SECRET2``` is basically backend known secret hash which when paired with arbitary generation forms the URK, so feel free to set it up as per your choice.

   D) it is not recommended to change ```process.env.cutUak``` and ```process.env.toUak``` since that will mess up the process of retrieving embedded uak from cat during login process.
        
  ### Step3: Connect your Frontend</br>
  Change all the key names to the ones which match your frontend</br>
   A) Line-No: ```const {email,username,password,HID} = req.body``` [This is the line which takes registeration data and UUID from frontend] feel free to change it and all the instances to it if any as per your choice.
      
   B) also feel free to change the route names if you wish to match with your frontend.
      
      
  ### Step4: The Moment of Truth
  Run the backend!</br>
    ```Command: node server.js``` -->

   
  <!-- ### Step5: Check results
  A premade script has been provided to check your documents created, you may modify and run query.js file to achieve that.

  ### NOTE: Instructions to test seperate modules for the npm package coming soon!! -->

 
   
   
# Future Goals for the Project   
 - Our Auth Tools are already in beta and we will soon be expanding for availability of tools which would allow diverse data storage.
 
# Contributions
 - Kindly refer to [CONTRIBUTIONS](https://github.com/jay0x5/Aveon/blob/51a19f8fae38dff6093f7a321c8716bc534a541d/Package/README.md) file on how one can contribute to the project.
 
# Support
- If any assistance is required then please feel free to contact our team at contactaveon@gmail.com


# Acknowledgements:
 -  Potential contributors will be recognized as a part of the family.
 
# Reach out to me:
 - My Discord: Jay05#9214<br/>
 - My twitter: https://twitter.com/Jay0x5<br/>
 - My mail: contactjay0x5@gmail.com
 
        
## It is my humble request to all the developers using the package to please contribute and improvise this package if needed.

## Thank you.
         
