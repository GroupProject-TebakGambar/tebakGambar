const express = require('express')
const router = express.Router()
const { Game } = require('../models')
const { Sequelize } = require('sequelize')

router.get("/game", async (req, res) => {
    try {
        const { level } = req.query
        let query;
        if (level) {
            query = {
                where: { level: level },
                attributes: ['id', 'imgUrl', 'level', 'answer'],
                order: Sequelize.literal('RANDOM()')
              }
        } else {
            query = { attributes: ['id', 'imgUrl', 'level', 'answer'] }
        }
        let data = await Game.findAll(query)
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router