const express = require('express');
const router = express.Router();

router.get('/message', (req,res) => {
    return res.send('All good');
})