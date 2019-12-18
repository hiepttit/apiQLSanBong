
const util = require('util')
const mysql = require('mysql')
var db = require('../Dbconnection');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM small_pitch'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM small_pitch WHERE id = ?'
        db.query(sql, [req.params.ID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let ID = req.params.ID;
        let sql = 'UPDATE small_pitch SET ? WHERE id = ?'
        db.query(sql, [data, ID], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO small_pitch SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM small_pitch WHERE id = ?'
        db.query(sql, [req.params.ID], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    },
    findByIdBigPitch: (req, res) => {
        const ID = req.params.ID;
        let sql = 'SELECT * FROM small_pitch WHERE id_big_pitch = ?'
        db.query(sql, ID, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    }
}