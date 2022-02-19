const db = require('../services/sqlite');
const parse = require('csv-parse');
const fs = require('fs');
const path = require('path');
const config = require('../config/config');

const friendsToWish = [];
const friendsToWishFromDB = [];

const todayIs = new Date();

function hasBirthday(friend) {
  const friendsDateOfBirth = new Date(friend.date_of_birth);
  return (
    friendsDateOfBirth.getDate() == todayIs.getDate() &&
    friendsDateOfBirth.getMonth() == todayIs.getMonth()
  );
}

function loadAllFriendsWithBirthdayFromDB(page = 1) {
  const offset = (page - 1) * config.listPerPage;
  const data = db.query(`SELECT * FROM friends LIMIT ?,?`, [offset, config.listPerPage]);

  data.map((friend) => {
    if (hasBirthday(friend)) {
      friendsToWishFromDB.push(friend);
    }
  });

  return friendsToWishFromDB;
}

function loadAllFriendsWithBirthday() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, '..', 'data', 'friends_list.csv'))
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
        reject(error);
      })
      .on('end', () => {
        const countFriendsToWish = friendsToWish.length;
        console.log(`${countFriendsToWish} friends of yours have birthday today!`);
        // console.log(friendsToWish);
        resolve();
      });
  });
}

module.exports = { loadAllFriendsWithBirthday, loadAllFriendsWithBirthdayFromDB, friendsToWish };
