const knex = require('../database')

module.exports = {
    async index(req, res) {
        const albuns = await knex('albuns')
        return res.json(albuns)
    },
    async show(req, res) {
        try {
            const { album_id } = req.params
            const album = await knex('albuns').where({ id: album_id })
            if (!album)
                return res.status(401).json({ sucess: true, msg: 'Album wanst found' })
            return res.json(album)
        } catch (e) {
            next(e)
        }
    },
    async store(req, res, next) {
        try {
            const { artist_id } = req.params
            const { title, year } = req.body

            await knex('albuns').insert({
                title,
                year,
                artist_id
            })
            return res.status(200).send('album registred')
        } catch (e) {
            next(e)
        }
    },
    async uptade(req, res, next) {
        try {
            const { album_id } = req.params
            const { title, year } = req.body
            await knex('albuns')
                .update({ title, year })
                .where({ id: album_id })

            return res.status(200).json({ sucess: true, msg: 'Album uptaded' })
        } catch (e) {
            return next(e)
        }

    },
    async delete(req, res, next) {
        try {
            const { album_id } = req.params
            await knex('albuns')
                .where({ id: album_id })
                .del()

            return res.status(200).json({ sucess: true, msg: 'Album deleted' })
        } catch (e) {
            return next(e)
        }

    }
}