const { Router } = require('express');

const db = require('../database');

const router = Router();

router.get('/', async(req, res) => {
    const results = await db.promise().query(`SELECT * FROM article`)
    res.status(200).send(results[0]);
});
// 指定
router.get('/:id', async(req, res) => {
    const { id } = req.params;
    const results = await db.promise().query(`SELECT * FROM article`)
    const post = results[0].find((post) => post.id === Number(id));
    res.status(200).send(post);
});

router.post('/', (req, res) => {
    const {title, content } = req.body;
    if (title && content) {
        try{
            db.promise().query(`INSERT INTO article(title, content) VALUES('${title}', '${content}')`)
            res.status(201).send({ msg: 'article created '})
        }
        catch (err) {
            console.log(err)
        }
    }
})
//PUT
router.put('/', (req, res) => {
    const { id, title, content } = req.body
    // 好醜，再想想
    if (title && content) {
        try {
            db.promise().query(`UPDATE article SET title = '${title}' WHERE id = '${id}'`)
            db.promise().query(`UPDATE article SET content = '${content}' WHERE id = '${id}'`)
            res.status(201).send({msg: 'Title & content Updated' })
        }
        catch (err) {
            console.log(err)
        }
    }
    else if (title) {
        try {
            db.promise().query(`UPDATE article SET title = '${title}' WHERE id = '${id}'`)
            res.status(201).send({msg: 'Title Updated' })
        }
        catch (err) {
            console.log(err)
        } 
    }
    else if (content) {
        try {
            db.promise().query(`UPDATE article SET content = '${content}' WHERE id = '${id}'`)
            res.status(201).send({msg: 'Content Updated' })
        }
        catch (err) {
            console.log(err)
        } 
    }
})
//DELETE
router.delete('/', (req, res) => {
    const { id } = req.body
    if (id) {
        try {
            db.promise().query(`DELETE FROM article WHERE id = '${id}'`)
            res.status(201).send({msg: 'Story Deleted' })
        }
        catch (err) {
            console.log(err)
        }
    }
})

module.exports = router;