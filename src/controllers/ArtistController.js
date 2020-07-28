const knex = require('../database')

module.exports = {
    async index(req, res) {
        const artists = await knex('artists')
        return res.json(artists)
    },
    async show(req, res) {
        try {
            const { artist_id } = req.params
            const artist = await knex('artists').where({ id: artist_id })
            if (!artist_id)
                return res.status(401).json({ sucess: true, msg: 'Artist wanst found' })
            return res.json(artist)
        } catch (e) {
            next(e)
        }
    },
    async store(req, res, next) {
        try {
            const { name, style, bio } = req.body

            await knex('artists').insert({
                name,
                style,
                bio
            })
            return res.status(200).json({ sucess: true })
        } catch (e) {
            next(e)
        }
    },
    async uptade(req, res, next) {
        try {
            const { artist_id } = req.params
            const { name, style, bio } = req.body
            await knex('artists')
                .update({ name, style, bio })
                .where({ id: artist_id })

            return res.status(200).json({ sucess: true, msg: 'Artist uptaded' })
        } catch (e) {
            return next(e)
        }

    },
    async delete(req, res, next) {
        try {
            const { artist_id } = req.params
            await knex('artists')
                .where({ id: artist_id })
                .del()

            return res.status(200).json({ sucess: true, msg: 'Artist deleted' })
        } catch (e) {
            return next(e)
        }

    }
}
