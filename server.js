var db=require('./dbconnection'); //reference of dbconnection.js

// db.query("SELECT price_usd,timestamp FROM coins_history WHERE coin_id = 'bitcoin' AND timestamp >= '1515747409000' ORDER BY timestamp ASC LIMIT 1",function(err, result) {
//     console.log(err);
//     console.log(result);
// })

// (SELECT group_concat(price_usd) as price  FROM `coins_history` WHERE `timestamp` >= 1516250575000 AND coin_id=ch.id ORDER BY id ASC) as graph24h,