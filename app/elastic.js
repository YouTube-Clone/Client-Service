const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace"
});


// client.ping(
//   {requestTimeout: 30000},
//   function(error) {
//     if (error) {
//       console.error("elasticsearch cluster is down!");
//     } else {
//       console.log("Elastic search connection is running.");
//     }
//   }
// );




// function getSuggestions(input) {
//   return elasticClient.suggest({
//     index: indexName,
//     type: "document",
//     body: {
//       docsuggest: {
//         text: input,
//         completion: {
//           field: "suggest",
//           fuzzy: true
//         }
//       }
//     }
//   });
// }



module.exports = client;