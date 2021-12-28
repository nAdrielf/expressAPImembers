const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
// const expressHandlebar = require('express-handlebars');
const app = express();

app.use(logger);

// app.engine('handlebars', expressHandlebar.engine({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server on ${PORT}`));
