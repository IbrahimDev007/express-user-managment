const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const user = [
    { id: 1, name: "jon", email: "jon@email.com" },
    { id: 2, name: "ron", email: "ron@email.com" },
    { id: 3, name: "don", email: "don@email.com" },
    { id: 4, name: "fon", email: "fon@email.com" },
]
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send('user managment server is running')
})
app.get('/users', (req, res) => {
    res.json(user)

})
app.post('/users', (req, res) => {
    console.log('post api hitting');

    console.log(req.body)
    const newUser = req.body;
    newUser.id = user.length + 1
    user.push(newUser);
    res.send(newUser);

})

app.listen(port, () => {
    console.log(`server is runing ${port}`);
})