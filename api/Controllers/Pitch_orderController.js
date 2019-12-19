
const util = require('util')
const mysql = require('mysql')
var db = require('../Dbconnection');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM pitch_order'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM pitch_order WHERE id = ?'
        db.query(sql, [req.params.ID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let ID = req.params.ID;
        let sql = 'UPDATE pitch_order SET ? WHERE id = ?'
        db.query(sql, [data, ID], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO pitch_order SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM pitch_order WHERE id = ?'
        db.query(sql, [req.params.ID], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    },
    findPitch: (req, res) => {
        const date = req.query.date;
        const startTime=req.query.startTime;
        const endTime=req.query.endTime;
        let sql = 'SELECT * FROM small_pitch WHERE id not in (SELECT small_pitch.id FROM pitch_order, small_pitch WHERE small_pitch.id = pitch_order.id_pitch AND CAST("'+date+'" AS DATE) = CAST(pitch_order.start_time as DATE) AND CAST(start_time AS TIME) BETWEEN CAST("'+startTime+'" AS TIME) AND CAST("'+endTime+'" AS TIME) GROUP BY small_pitch.id_big_pitch)'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    }
}