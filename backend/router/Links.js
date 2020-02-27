const express = require('express');
const nanoid = require('nanoid');
const router = express.Router();
const Link = require('../moduls/Link');

    router.get('/:id', async (req,res)=>{
        try{
            const link = await Link.findOne({shortUrl : req.params.id});
            return res.status(301).redirect(link.originalUrl)
        }catch (e) {
            res.status(404).send({message: 'Not found'})
        }
    });

    router.post('/', async (req,res)=>{
        const linkData = req.body.url;
        let shortUrlId = nanoid(8);

        const resId = await Link.find();
        await resId.forEach(key=> {
            shortUrlId === key.shortUrl ? shortUrlId = nanoid(8) : shortUrlId;
        });

        const links = {
            shortUrl: shortUrlId,
            originalUrl: linkData
        };

        const result = new Link(links);
        try{
            await result.save();
            return res.send(result)
        }catch (e) {
           return  res.status(422).send(e)
        }
    });

module.exports = router;