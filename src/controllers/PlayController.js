const knex = require('../database')

module.exports = {
    async index(req, res, next) {
        try {
            const { user_id } = req.query
            
            const query = knex('plays')

            if(user_id){
                query
                .where({user_id})
                .join('users', 'users.id', '=', 'plays.user_id')
                .select('users.*', 'songs.*')
            }
            const plays = await query

            return res.json(plays)
        } catch (e) {
            return next(e)
        }
    },
    async store(req, res, next) {
        try {
            const { user_id, playlist_id } = req.params
        
            await knex('plays').insert({
                user_id,
                playlist_id
              
            })
            return res.status(200).send('album cadastrado')
        } catch (e) {
            next(e)
        }
    },
}