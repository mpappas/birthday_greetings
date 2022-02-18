const http = require('http');

const app = require('./app');
const { loadAllFriendsWithBirthday } = require('./models/bdays.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadAllFriendsWithBirthday();
  // await loadAllFriendsWithBirthdayFromDB();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
