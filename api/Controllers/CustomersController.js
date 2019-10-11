const util = require('util')
const mysql = require('mysql')
var db = require('../Dbconnection');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM customer'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM customer WHERE id = ?'
        db.query(sql, [req.params.ID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let ID = req.params.ID;
        let sql = 'UPDATE customer SET ? WHERE id = ?'
        db.query(sql, [data, ID], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO customer SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM customer WHERE id = ?'
        db.query(sql, [req.params.ID], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}