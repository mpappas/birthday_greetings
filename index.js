const parse = require('csv-parse');
const fs = require('fs');

const friendsToWish = [];

// Implement this function to return friends with birthdays
function hasBirthday(friend) {
  return friend;
}

fs.createReadStream('friends_list.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('data', (friend) => {
    if (hasBirthday(friend)) {
      friendsToWish.push(friend);
    }
  })
  .on('error', (err) => {
    console.log(err);
  })
  .on('end', () => {
    friendsToWish.map((friend) => {
      console.log('friend', friend.email);
      return friend['first_name'];
    });
    console.log(`${friendsToWish.length} friends to wish found`);
  });
