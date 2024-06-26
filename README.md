# QUIZ AI

Create a quiz game with AI

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

- Node.js and npm (https://nodejs.org/en/)

### Installing

A step by step series of examples that tell you how to get a development env running

```
git clone https://github.com/ritwickrajmakhal/quizai-backend.git
cd quizai-backend
npm install
```

### Create a .env file in the root of the project and add the following

```
HOST=0.0.0.0
PORT=1337
APP_KEYS=rb5fho0mM5MrgDn7y4sqWw==,hcx/Scy5KFyS3oU73fHI7g==,s/ca8AkoP+FFsN0+9q5OUA==,CrSre7Unc7XJlLkJcHrFjA==
API_TOKEN_SALT=c0VzwAzPigif15zJH+I+Wg==
ADMIN_JWT_SECRET=i6IcP2W/br2K7grNJSyVCg==
TRANSFER_TOKEN_SALT=+JPXyG5HHilQFZ1agqNbTg==
JWT_SECRET=uU9Kq9KwxQASuonuO+sEMA==
```

### Run the project

```
npm run develop
```
### Strapi Setup

- Go to content manager, under SINGLE TYPES click on website and fill the values as follows:
name:
```
Quiz AI
```
quotes:
```
[
  "Quiz AI: Where knowledge meets technology in a battle of wits.",
  "In the realm of Quiz AI, every question is a gateway to learning.",
  "Unlock the power of artificial intelligence through the fun and challenge of Quiz AI.",
  "Quiz AI: Where curiosity sparks and intelligence thrives.",
  "Experience the future of trivia with Quiz AI – where human curiosity meets artificial intelligence.",
  "Quiz AI: Your digital companion in the pursuit of knowledge.",
  "Engage, learn, and conquer with Quiz AI – the ultimate test of intellect and wit.",
  "Let Quiz AI be your guide through the endless realms of information and trivia.",
  "In the world of Quiz AI, the quest for knowledge is infinite and exhilarating.",
  "Challenge your mind, expand your horizons – all with the help of Quiz AI."
]
```
coverimage
```
https://sharedstorageritwick.blob.core.windows.net/quizai-storage/assets/make_a_new_background_for_my_website_whose_name_is_upscaled_min_2d200c6c8f.jpg
```
- Create a Strapi API key (For Quiz AI APP)
