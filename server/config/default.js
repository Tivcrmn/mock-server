module.exports = {
  port: 5000,
  COOKIE: {
    KEY_TOKEN: 'msat', // Mock Server Access Token
    KEY_USER: 'nbuser',
    MAX_AGE: 1000 * 60 * 60 * 24 // ms
  },
  redis: {
    host: '127.0.0.1',
    port: 6379,
    db: 0
  },
  // remote-db: 'mongodb://<dbuser>:<dbpassword>@ds253879.mlab.com:53879/mock-server'
  db: 'mongodb://127.0.0.1/ms-db',
  tokenName: 'access_token',
  tokenExpireSeconds: 60 * 60 // 24 * 60 * 60
}