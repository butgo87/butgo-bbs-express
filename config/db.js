const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('D:\\dev\\workspace\\database\\butgo_bbs.sqlite', (err) => {
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

// DB모듈 싱글톤 연결하기
// https://dev-taerin.tistory.com/18
