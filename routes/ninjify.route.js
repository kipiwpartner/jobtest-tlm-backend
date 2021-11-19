const router = require('express').Router()

router.get('/ninjify', async (req, res) => {

    if (!req.query.x){
        res.status(404).json({message:"Not found"})
    } else {
        try {
            lst = await req.lst
            //console.log(req.lst)
            // const arr = req.query.x.split(",")
            // var name = arr.map(function(el){
            //     let obj = lst.find(x => x.param == el.trim())
            //     if (obj) return obj.name
            //     return ''
            // }).join(" ")
            res.status(200).json({name:lst})
        } catch (e) {
            console.log(e.message)
            res.status(200).json({message:e.message})
        }

    }

})

module.exports = router;