const router = require('express').Router();
const config = require('config');

router.get('/ninjify', async (req, res) => {
    lst = await req.lst
    const arr = req.query.x.split(",");
    var name = arr.map(function(el){
        let obj = lst.find(x => x.param == el.trim())
        if (obj) return obj.name
        return ''
    }).join(" ")
    res.status(200).json({name})
})

module.exports = router;