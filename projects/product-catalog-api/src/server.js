const app = require('./app');

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log('*************************************');
  console.log(`🚀 Server running on port ${PORT}`);
  console.log('*************************************');
});

module.exports = server;