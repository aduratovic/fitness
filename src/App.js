const express = require('express');
const app = express();
const cors = require('cors');
require('./db/conn')
const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use('/api/exercises', exercisesRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});