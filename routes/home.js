var express = require('express');
var router = express.Router();
var { dbConn, dbClose } = require('../config/db');

/* GET home page. */
router.get('/', function (req, res, next) {

  var sql = `
  select 
          SEQ_NAME
        , NEXT_VAL
        , SEQ_DATE
        , PREFIX
        , PADDING
        , CD_PREFIX_TYPE
        , CD_CYCLE_OPTION
        , CD_REC_STAT
        , FRST_REG_USER_ID
        , FRST_REG_DTTM
        , LAST_UDT_USER_ID
        , LAST_UDT_DTTM
  from t_sequence`;
  console.log('sql:', sql);

  dbConn.all(sql, [], (err, rows) => {
    if (err) {
      console.error(err.message)
      throw err;
    }
    console.log('rows:', rows)
    rows.forEach(row => {
      console.log('row:', row);
    });
  })

  // dbClose(dbConn);

  res.render('home', { title: 'Express' });
});

module.exports = router;
