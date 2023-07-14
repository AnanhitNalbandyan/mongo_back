const express = require('express')
const users = require('./routes/users')
const connect = require('./DataBase/database')
const cors = require('cors')

const PORT = 3334;
const app = express();
app.use(cors({
    origin:'*'
}))

connect()
app.use(express.json());
app.use('/users', users);

app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`);
})


