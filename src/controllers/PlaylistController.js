const knex = require('../database')

module.exports = {
    async index(req, res) {
        const playlists = await knex('playlists')
        return res.json(playlists)
    },
    async store(req, res, next) {
        try {
            const { user_id } = req.params
            const { name, description } = req.body

            await knex('playlists').insert({
                name,
                description,
                user_id
            })
            return res.status(200).send('album cadastrado')
        } catch (e) {
            next(e)
        }
    },
    async fillPlaylist(req, res, next) {
        try {
            const { playlist_id, song_id } = req.params
            /*if (!playlist_id || song_id)
                return res.status(404).send({ success: false, message: 'id not found' });*/
            var song = await knex('songs').where({ id: song_id })
            var playlist = await knex('playlists').where({ id: playlist_id })
            console.log(song, playlist)
            playlist[0].duration += song[0].duration
            var song = await knex('playlist_songs').count('song_id').where({ playlist_id: playlist_id })
            var qtd = parseInt(song[0].count)
            qtd += 1
            await knex('playlists')
            .update({ songs: qtd, duration: playlist[0].duration })
            .where({ id: playlist_id })
            await knex('playlist_songs').insert({
                playlist_id,
                song_id
            })
            return res.status(200).send('album cadastrado')
        } catch (e) {
            next(e)
        }
    },
    async uptade(req, res, next) {
        try {
            const { playlists_id } = req.params
            const { name, description } = req.body
            await knex('playlists')
                .update({ name, description })
                .where({ id: playlists_id })

            return res.status(200).json({ sucess: true, msg: 'Playlist uptaded' })
        } catch (e) {
            return next(e)
        }

    },
    async delete(req, res, next) {
        try {
            const { playlist_id } = req.params
            await knex('playlists')
                .where({ id: playlist_id })
                .del()

            return res.status(200).json({ sucess: true })
        } catch (e) {
            return next(e)
        }

    },
    async removeSong(req, res, next) {
        try {
            const { song_id } = req.params
            await knex('playlist_songs')
                .where({ song_id: song_id })
                .del()

            return res.status(200).json({ sucess: true })
        } catch (e) {
            return next(e)
        }

    }
}