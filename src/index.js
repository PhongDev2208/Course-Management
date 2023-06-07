const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override')

const SortMiddleware = require('./app/middleware/sortMiddleware')

const route = require('./routes');
const db = require('./config/db');
// Connect to the database
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

app.use(methodOverride('_method'))
// Custom middleware
app.use(SortMiddleware)

// HTTP logger
app.use(morgan('combined'));
// Template engine
app.set('views', path.join(__dirname, 'resources','views'));
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: require('./helpers/handlebars')
  }),
);
app.set('view engine', 'hbs');
// Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
