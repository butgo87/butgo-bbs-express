const sqlite3 = require('sqlite3').verbose();

let dbConn = new sqlite3.Database('D:\\dev\\github-bbs-workspace\\database\\butgo_bbs.sqlite', (err) => {
    if (err) {
        console.error(err.message);
        throw err;
    }
    console.log('Connected to the butgo_bbs database.');
})

dbClose = (dbConn) => {
    dbConn.close((err) => {
        if (err) {
            console.error(err.message);
            throw err;
        }
        console.log('Close the database connection.');
    })
}

module.exports = { dbConn, dbClose };

/*
let db = new sqlite3.Database('D:\\dev\\github-bbs-workspace\\database\\butgo_bbs.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the butgo_bbs database.');
})

db.close((err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Close the database connection.');
});
*/
// DB모듈 싱글톤 연결하기
// https://dev-taerin.tistory.com/18
