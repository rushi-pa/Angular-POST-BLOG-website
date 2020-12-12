var express = require("express");
var app = express();
app.use(express.static('./dist/web422-a4'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/web422-a4/' }
    );
});

app.listen(process.env.PORT || 8080);