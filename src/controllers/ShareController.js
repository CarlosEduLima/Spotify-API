const knex = require('../database')
const crypto = require('crypto')
module.exports = {
    async index(req, res) {
        const users = await knex('playlists')
        return res.json(users)
    },
    async store(req, res, next) {
        try {
            const { user_id, playlist_id } = req.params
        
            await knex('shares').insert({
                user_id,
                playlist_id
              
            })
            return res.status(200).send('Shared')
        } catch (e) {
            next(e)
        }
    },
}