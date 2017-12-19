const elasticsearch = require("elasticsearch");

const client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace"
});


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