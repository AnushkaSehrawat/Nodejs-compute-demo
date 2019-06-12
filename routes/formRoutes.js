const express = require('express');
const router = express.Router();

router.get('/login', (req, resp, next) => {
    resp.send(`
        <html>
            <form method="POST">
                <label> Name: </label>
                <input type="text" name="Name">    
                <button type="submit"> Submit </button>        
            </form>
        </html>
    `);
});

router.post('/login',(req,resp,next)=>{
    const name = req.body.Name;
    resp.json({
        name:name
    });
});

module.exports = router;