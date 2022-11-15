const express = require('express');

const router = express.Router();

router.get('/login',(req,res,next) => {
    
    res.send(`
    <html>
        <body>
            <form onsubmit="localStorage.setItem('Name',document.getElementById('username').value)" action="/" method ="POST">
                <input type="text"  id="username" name="name">
                <br>
                <button type="submit">Send</button>
            </form>
        </body>
    </html>`)
}
);


module.exports=router;