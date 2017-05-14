var Bot = require('./twitbot');
var config = require('./config_secrets/config').config;

const ONE_MIN = 60000

tbot = new Bot(config);

faces = ['😭','😂','😁','🙃','😲','😳','🤔','😫','😵','😴'];
leftItems = ['🍊','🍗','🍕','🌭','🎮','📱','⏰','📖','📝','✂','🛠','🔌','💡','⌛','️📸','🕹','🎨','🎷','🍀','⛑','⚡'];

function callback(err, reply) {
  console.log('Error:', err);
  console.log('Reply:', reply);
}

function getRandomIndex(length) {
  min = 0;
  max = length - 1;
  return Math.floor(Math.random() * (max - min)) + min;
}

function emojiPersonHoldingSomethingInLeftHand() {
  var face = faces[getRandomIndex(faces.length)];
  var item = leftItems[getRandomIndex(leftItems.length)];
  return '.      ' + face + '\n' + item + '__ | /\n' + ' ,      / \\'
}

function tweetTiny() {
  var tinyTweet = emojiPersonHoldingSomethingInLeftHand()

  tbot.tweet(tinyTweet, callback);
}

setInterval(function() {
  try {
    tweetTiny();
  }
 catch (e) {
    console.log(e);
  }
}, ONE_MIN * 2);