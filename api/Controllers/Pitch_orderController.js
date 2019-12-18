
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
    }
}