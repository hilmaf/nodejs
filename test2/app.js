const http = require('http');
const express = require('express');
const port = 3000;

// mssql 데이터베이스 정보
const mssql = require('mssql');
const pool = new mssql.ConnectionPool({
    user: 'sa',
    password: '!Insung2023#',
    server: '192.168.230.146',
    database: 'LAB',
    encrypt: false,
});

// 웹 서버 구축
const callbackApp = express();

// 데이터베이스 연결
pool.connect((err) => {
    if(err) {
        console.log('DB Connection Fail - Error Occurred', err);
        return;
    }

    console.log('DB Connection Completed !!');
})
