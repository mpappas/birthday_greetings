const request = require('supertest');
const app = require('../app');
const { loadAllFriendsWithBirthday } = require('../models/bdays.model');

describe('Friends API', () => {
  beforeAll(async () => {
    await loadAllFriendsWithBirthday();
  });

  describe('Test GET /sendWishes', () => {
    test('It should respond with 200 success', async () => {
      const response = await request(app)
        .get('/v1/sendWishes')
        .expect('Content-Type', /json/)
        .expect(200);

      expect(response.body).toEqual(['Clary', 'Jery']);
    });
  });
});
