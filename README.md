# TinyBreckBot

UChicago Scav 2017 for Breck

Item 10: In the same vein as @thetinygallery and @tiny_cityscapes, give us a glimpse into your team's preJudgment prep with a "tiny HQ" Twitter bot. [5 points]

Follow the Bot [@TinyBreckHQ](https://twitter.com/TinyBreckHQ)

## Description

This bot runs every 2 minutes and posts some emoji art describing the breck scavvies in HQ.

# Setup, Install, and Run

## Setup

Clone the repo and cd into it.

```
git clone git@github.com:eurbs/TinyBreckBot.git
cd TinyBreckBot
```

Create your config file

```
touch config_secrets/config.js
```

Copy this template into the config file and fill it out with your application keys
```javascript
var config = {
  consumer_key:         '', 
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
}

exports.config = config;
```

## Install

```
npm install
```

## Run

```
npm run start-bot
```

# Extending the Project

– Make the bot a bit smarter (it's currently random)
- Introduce different types of scenes that can be created
- Etc.

# Resources

[How I built Metaphor-a-Minute](http://tinysubversions.com/2012/05/how-i-built-metaphor-a-minute/) blog post by Darius Kazemi
[Bot Example](https://github.com/ttezel/twit/blob/master/examples/bot.js) from Twit example code