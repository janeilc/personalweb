const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html'); // send HTML file on GET request
});

// handles form submission
app.post('/contact', (req, res) => {
    const { firstname, lastname, email, comments } = req.body; // access form data
    console.log('Form submission:', { firstname, lastname, email, comments });
    
    res.send('Form submitted successfully'); 
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`); // connects to local port
});