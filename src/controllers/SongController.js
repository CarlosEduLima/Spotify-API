const knex = require('../database')
const crypto = require('crypto')
module.exports = {
    async index(req, res) {
        const songs = await knex('songs')
        return res.json(songs)
    },
    async store(req, res, next) {
        try {
            const { album_id } = req.params
            const { title, year, duration } = req.body

            await knex('songs').insert({
                title,
                year,
                duration,
                album_id
            })
            return res.status(200).send('album cadastrado')
        } catch (e) {
            next(e)
        }
    },
    async uptade(req, res, next) {
        try {
            const { song_id } = req.params
            const { title, year, duration } = req.body
            await knex('songs')
                .update({ title, year, duration })
                .where({ id: song_id })

            return res.status(200).json({ sucess: true, msg: 'Song uptaded' })
        } catch (e) {
            return next(e)
        }

    },
    async delete(req, res, next) {
        try {
            const { song_id } = req.params
            await knex('albuns')
                .where({ song_id })
                .del()
            await knex('songs')
                .where({ id: song_id })
                .del()


            return res.status(200).json({ sucess: true, msg: 'Song deleted' })
        } catch (e) {
            return next(e)
        }

    }
}