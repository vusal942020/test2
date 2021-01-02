const http = require('http');
const https = require('https');
const port = 3000;
const fs = require('fs');

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile("index.html", function (error, data) {
        if (error) {
            res.writeHead(404);
            res.write("error: fayl bulunamadi");

        } else {
            res.write(data)
        }
        res.end();
    });

});

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjJhMjBlOTg1LWY4NDUtNDRkNi1iMzBmLTljY2JiYmEzYmI2NCIsImlhdCI6MTYwOTU4ODUzMSwic3ViIjoiZGV2ZWxvcGVyL2RjNTMxYzUzLWM5YzQtMjVkZS0zNjNhLTYxYWMzODQxMmZkZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOC4xODguNTguNTEiLCIxODguMjUzLjIzMS4xMTkiXSwidHlwZSI6ImNsaWVudCJ9XX0.SjnYEwi6Pz5WZfFKopKFT2xxXnYbND0NWncYmt8IT254Rx2jVx4tw14utaMoNVUgI9E2f9VpGwDvW8_W24v2tQ";

const options = {
    host: 'https://api.clashroyale.com/v1/locations',
    headers: { 'Authorization': "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjJhMjBlOTg1LWY4NDUtNDRkNi1iMzBmLTljY2JiYmEzYmI2NCIsImlhdCI6MTYwOTU4ODUzMSwic3ViIjoiZGV2ZWxvcGVyL2RjNTMxYzUzLWM5YzQtMjVkZS0zNjNhLTYxYWMzODQxMmZkZSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOC4xODguNTguNTEiLCIxODguMjUzLjIzMS4xMTkiXSwidHlwZSI6ImNsaWVudCJ9XX0.SjnYEwi6Pz5WZfFKopKFT2xxXnYbND0NWncYmt8IT254Rx2jVx4tw14utaMoNVUgI9E2f9VpGwDvW8_W24v2tQ" }
};


callback = function(response) {
    let str = '';
    response.on('data', function (chunk) {
        str += chunk;
    });

    response.on('end', function () {
        console.log(str);
    });
};

const req = http.get(options, callback);
req.end();