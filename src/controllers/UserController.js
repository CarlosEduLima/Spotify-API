const knex = require('../database')
const crypto = require('crypto')
module.exports = {
    async index(req, res) {
        const users = await knex('users')
        return res.json(users)
    },
    async show(req, res) {
        const { user_id } = req.params
        if (!user_id)
            return res.status(401).json({ sucess: true, msg: 'User wanst found' })
        try {
            const user = await knex('users').where({ id: user_id })
            return res.json(user)
        } catch (e) {
            next(e)
        }
    },
    async store(req, res, next) {
        try {
            const { email, name, country, age } = req.body

            const key = crypto.createCipher('aes-128-cbc', 'username');
            var username = key.update(name, 'utf8', 'hex')
            username += key.final('hex');

            await knex('users').insert({
                username,
                email,
                name,
                country,
                age
            })
            return res.status(200).send('User registered')
        } catch (e) {
            next(e)
        }
    },
    async uptade(req, res, next) {
        try {
            const { user_id } = req.params
            const { name, email, country, age } = req.body
            await knex('playlists')
                .update({ name, email, country, age })
                .where({ id: user_id })

            return res.status(200).json({ sucess: true, msg: 'User uptaded' })
        } catch (e) {
            return next(e)
        }

    },
    async delete(req, res, next) {
        try {
            const { user_id } = req.params
            await knex('artists')
                .where({ id: user_id })
                .del()

            return res.status(200).json({ sucess: true, msg: 'User deleted' })
        } catch (e) {
            return next(e)
        }

    }
}