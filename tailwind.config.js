module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.vue', './src/**/*.js'],
  },
  theme: {
    extend: {
      //
    },
  },
};
