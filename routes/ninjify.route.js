const router = require('express').Router()
const list = require('../config/list')

router.get('/ninjify', async (req, res) => {

    if (!req.query.x){
        res.status(404).json({message:"Not found"})
    } else {
        try {
            const arr = req.query.x.split(",")
            var njname = arr.map(function(el){
                let obj = list.find(x => x.param == el.trim())
                if (obj) return obj.name
                return ''
            }).join(" ")
            res.status(200).json({name:njname})
        } catch (e) {
            console.log(e.message)
            res.status(200).json({message:e.message})
        }

    }

})

module.exports = router;