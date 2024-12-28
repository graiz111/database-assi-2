const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'http://localhost:3000', 
    methods: 'GET,POST,PUT,DELETE', 
};

app.use(cors(corsOptions)); 


app.get('/', (req, res) => {
    res.json({ message: "GET request received!" });
});

app.post('/', (req, res) => {
    res.json({ message: "POST request received!" });
});

app.put('/', (req, res) => {
    res.json({ message: "PUT request received!" });
});

app.delete('/', (req, res) => {
    res.json({ message: "DELETE request received!" });
});

app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001');
});
