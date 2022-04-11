

# Aveon
Aveon is an open sourced, decentralized backend querying and data storing system being developed for better security than central databases based on GunDB.

# Purpose
The purpose of starting this project is to apply the concept of decentralization without actually using complex blockchains and solidity and stuff,To study decentralization and speculate the capacity of P2P networks and of course to provide a tool with better security than standard databases like MySql,MongoDb,etc.

# Features
1. ### Scattered Users:
   User Credentials are distributed as unique Documents accross the GunDB Network.
   
2. ### CAT will Login:
   No Cookies,Remember Me or Login input fields but the login part is completely seamless and secured with ClientAccessTokens[CAT] unique to each user.
   
3. ### Distinctive Locks:
   Every piece of sensitive data like passwords and every access key point to useraccounts are encrypted with keys and connected to each user uniquely.
   
4. ### No CounterSpies:
   Our backend and frontend code will just be a intermediary link between Client and GunDB Network, NO SPYWARES INCLUDED!
   
5. ### ACCESS DENIED!!:
   To login into someone's account, you dont need user's credentials but you actually need to manipulate the unique CAT for each account.
   
6. ### NO CENTRAL MESS:
   In a highly unlikely attempt of a data breach into the network, there is no need to worry about multiple user data being leaked since the person attempting the breach    will need to have physical access to each user device to actually try to manipulate secured CAT and gain access.
   
   
# But... How does it work?


![b61466cc462bf5a13fef21ef40b710df](https://user-images.githubusercontent.com/78173760/161983977-625fe5f1-b4c5-4387-be27-3cfcf3b5f4fa.png)

Well its quite simple, At the moment the whole system has 3 key components UAK,URK,CAT and of course the GUNDB Network</br>
- UAK stands for UserAccessKey and is the actual hash to access user ~~data~~ _**credentials_**,used for accessing credentials & relations purpose</br>
- URK stands for UserRecoveryKey and is the actual key ~~linked~~ **_uniquely linked_** to each user on the network,used for recovery purpose</br>
- CAT stands for ~~User~~ ClientAccessToken and is passed on to user and also holds many **secrets** like UAK,used for accessing UAK</br>
- GunDb network allows distribution of User-Credentials in a ~~Centralized~~ **_Decentralized_** Manner</br>



## 1. General System Scheme:
  ![20220408_111555](https://user-images.githubusercontent.com/78173760/162372588-86a48c9a-d1d2-4672-bc1a-5148e5f0ebbb.jpg)

  
## 2. Component Scheme:
![Screenshot 2022-04-08 122038](https://user-images.githubusercontent.com/78173760/162380341-f55656bc-c053-4725-a795-6bb769cdb64d.png)


# TODOS [Will be updated everytime a task is completed or has been created]

 ## Workspace: Package folder

 ### 1]Make CreateRecoveryDoc function output/return encrypted CAT token and URK token so developer using package can take those values and send them to frontend as per their convenience.</br></br>For example: The developer should be able to assign the returned values from the function to the variables which they have made in their code and then send those variables to frontend as per their convenience.

 


# Getting Started
# Warning!!

  - Since it is still under Developement, it is not recommended to use this system with any of your professional work like websites or apps.
  
# File Structure:
   - Initial folder includes the server.js file which is the main code initially built.</br>
   - Package folder includes an empty file at the moment and all the developement for npm package  version of this system will take place in Package folder.</br>
   - Samples folder includes all the sample files.
  
# For Testing Purpose:-
   ## *TOOLS*
   Any Stable versions of NodeJS, I am using Node v16.13
   The code is has been initially built and tested on Windows at the moment, Looking for someone who can handle the Linux Developement for this project
    
   # *Packages*
    npm install express
    npm install dotenv
    npm install uuid
    npm install gun
    npm install crypto-js
    
   # *WHAT THE CODE?!*
   
   Lets see how we can run the backend now?
## For Module based code which is being developed for NPM Package</br>[Main Development Focus]:

  ### File Structure["Package" folder]:
  - **index.js**: main code file where all the functionalities are being built.</br>

  - **test.js**: test file which imports index.js and is testing its RegisterUser Function.</br>

  - **logintest.js**: another test file which imports index.js and is testing its LoginUser Function.</br>

  - **queryyy.js**: just a GUNDB querying code which is used to check documents by entering respective URK or UAK.</br>

  - **package.json**: package file created after npm init.


  ### Running the code:
   
   For now, I think this is pretty straightforward without any code changes, you can run node filename.js after you set parameters for registering function in test.js file and then getting the encrypted CAT from the terminal, passing it to logintest.js and testing login function.

   Please report any issues via "Issues" or reach out to me :D






## For Initial barebone code in Initial folder</br>[Wont be maintained after first package launch]:
 
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
    ```Command: node server.js```

   
  ### Step5: Check results
  A premade script has been provided to check your documents created, you may modify and run query.js file to achieve that.

  ### NOTE: Instructions to test seperate modules for the npm package coming soon!!

 
   
   
# Future Goals for the Project   
 - We will be pushing to launch this whole system as a tool for every developer to use, i just hope that enough contributions are made with a strong feedback
 
# Contributions
 - Kindly refer to [CONTRIBUTIONS](https://github.com/jay0x5/Aveon/blob/1ab181d16e535606393381f5374df08498578eb0/contributions.md) file on how one can contribute to the project.
 
# Acknowledgements:
 - Cheers to Mr Mark Nadal @amark for creating such a wonderful utility like GunDB.</br>
 -  Potential contributors will be recognized as a part of the family.
 
# Reach out to me:
 - My Discord: Jay05#9214<br/>
 - My twitter: https://twitter.com/Jay0x5<br/>
 - My mail: contactjay0x5@gmail.com
 
        
   
         
