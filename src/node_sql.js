"use strict";

const { builtinModules } = require('module');

const Pool = require('../node_modules/pg').Pool;
const pool = new Pool({
    user: process.env.user,
    password: process.env.password,
    host: process.env.host,
    database: process.env.database,
    port: process.env.port
})

const createTable = async() => {
    return new Promise(async() => {
        let sql = pool.query(
            `
            CREATE TABLE IF NOT EXISTS visitors(
            id SERIAL PRIMARY KEY,
            visitorName varchar(255) NOT NULL,
            visitorAge int NOT NULL,
            dateOfVisit date NOT NULL,
            timeOfVisit time NOT NULL,
            assistentName varchar(20) NOT NULL,
            comments varchar(100)  NOT NULL
            )`,
            (error) => {
                if(error){
                    throw error;
                }  }
        )
    })
}
 createTable();
 
 const addNewVisitor =  async (visitorName, visitorAge,dateOfVisit, timeOfVisit,assistentName, comments ) =>{
     try{ const field = `INSERT INTO visitors (visitorName, visitorAge,  dateOfVisit, timeOfVisit,assistentName, comments)
     VALUES ($1, $2, $3,$4,$5,$6) RETURNING *;`;
         const fieldData = [visitorName,visitorAge,dateOfVisit, timeOfVisit,assistentName,comments ];
         var results = await pool.query( field, fieldData)
         console.table(results.rows)
 }catch (erro){
     console.log(erro)
 }}
 
const listData =  async () =>{
    try{ const sqlQuery = `SELECT  visitorName, visitorAge FROM visitors  `
        var results = await pool.query( sqlQuery)
        console.table(results.rows)
}catch (erro){
    console.log(erro)
}}

const deleteRecorde =  async (id) =>{
    try{ const sqlQuery = `DELETE FROM visitors WHERE id = $1 `;
        const fieldData = [id];
        var results = await pool.query( sqlQuery, fieldData)
        console.table(results.rows)
}catch (erro){
    console.log(erro)
}}

async function updateRecord (id , column, fieldEntry) {
    try{ const sqlQuery = ` UPDATE visitors SET ${column} = $2 WHERE id = $1`;
        const fieldData = [fieldEntry ,id ]
        var results = await pool.query( sqlQuery ,fieldData)
        console.table(results.rows)
}catch (erro){
    console.log(erro)
    }
}

const visitorDetails =  async (id) =>{
    try{ const sqlQuery = `SELECT * FROM visitors WHERE id = $1 `;
        const fieldData = [id];
        var results = await pool.query( sqlQuery, fieldData)
        console.table(results.rows)
}catch (erro){
    console.log(erro)
}} 


async function deleteVisitorRecorders (){
    try{ const sqlQuery = `DELETE FROM visitors `;
        var results = await pool.query( sqlQuery)
        console.table(results.rows)
}catch (erro){
    console.log(erro)
}}

module.exports = (addNewVisitor, deleteRecorde, deleteVisitorRecorders, updateRecord, listData)
