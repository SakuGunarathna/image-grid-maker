const app = require('./config/express');
const mongoose = require('./config/mongoose');
const { port, env } = require('./config/variables');

// Start mongoose connection
mongoose.connect();

app.listen(port, () => console.log(`server started on port ${port}`));

/**
* Exports App
* @public
*/
module.exports = app;