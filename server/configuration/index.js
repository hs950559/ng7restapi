if (process.env.NODE_ENV === 'test') {
  module.exports = {
    JWT_SECRET: 'codeworkrauthentication',
    oauth: {
      google: {
        clientID: 'number',
        clientSecret: 'string',
      },
      facebook: {
        clientID: 'number',
        clientSecret: 'string',
      },
    },
  };
} else {
  module.exports = {
    JWT_SECRET: 'mysecret',
    oauth: {
      google: {
        clientID: '998098523651-5l4osqljaoibjeldtjdpqhm4k0hsrst7.apps.googleusercontent.com',
        clientSecret: 'jM8UmgqKsiZyMOlzNXCQ57rW',
      },
      facebook: {
        clientID: '967782503374688',
        clientSecret: 'd0fa3605d5e41d73e066dc56efd1044e',
      }
    }
  };
}
