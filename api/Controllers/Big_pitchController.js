
const util = require('util')
const mysql = require('mysql')
var db = require('../Dbconnection');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM big_pitch'
        db.query(sql, (err, response) => {
            if (err) res.json(err)
            res.json(response)
        })
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM big_pitch WHERE id = ?'
        db.query(sql, [req.params.ID], (err, response) => {
            if (err) res.json(err)
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let ID = req.params.ID;
        let sql = 'UPDATE big_pitch SET ? WHERE id = ?'
        db.query(sql, [data, ID], (err, response) => {
            if (err) res.json(err)
            res.json({message: 'Update success!'})
        })
    },
    store: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO big_pitch SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) res.json(err)
            res.json({message: 'Insert success!'})
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM big_pitch WHERE id = ?'
        db.query(sql, [req.params.ID], (err, response) => {
            if (err) res.json(err)
            res.json({message: 'Delete success!'})
        })
    },
    search: (req, res) => {
        const name = req.query.name;
        let sql = "SELECT * FROM big_pitch WHERE name like '%" + name + "%'";
        db.query(sql, (err, response) => {
            if (err) res.json(err)
            res.json(response)
        })
    }
    
}