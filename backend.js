const express = require('express')
const app = express()
const port = 5000
const request = require('request');
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/guardian-home', (req, res) => {
    request('https://content.guardianapis.com/search?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&section=(sport|business|technology|politics)&show-blocks=all', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }

        articles = body.response.results;
        articleFormatted = [];

        for(i = 0; i < articles.length; i++)
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].webTitle;
            singleArticle["section"] = articles[i].sectionId;
            singleArticle["date"] = articles[i].webPublicationDate;
            singleArticle["description"] = articles[i].blocks.body[0].bodyTextSummary;
            singleArticle["id"] = articles[i].id;
            singleArticle["url"] = articles[i].webUrl;
            
            try {
                imageArray = articles[i].blocks.main.elements[0].assets;
                singleArticle["image"] = imageArray[imageArray.length-1].file;
            }

            catch(e) {
                singleArticle["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
            }

            articleFormatted.push(singleArticle);
        }
        return res.send(articleFormatted);
    });

    // LHYTEtcuFBlGLAIesP38SR9oxgguaJz7        NY
})

app.get('/guardian-world', (req, res) => {
    request('https://content.guardianapis.com/world?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        return res.send(body.response.results);
    });
    
    // LHYTEtcuFBlGLAIesP38SR9oxgguaJz7        NY
})

app.get('/guardian-politics', (req, res) => {
    request('https://content.guardianapis.com/politics?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        return res.send(body.response.results);
    });
    
    // LHYTEtcuFBlGLAIesP38SR9oxgguaJz7        NY
})

app.get('/guardian-business', (req, res) => {
    request('https://content.guardianapis.com/business?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        return res.send(body.response.results);
    });
    
    // LHYTEtcuFBlGLAIesP38SR9oxgguaJz7        NY
})

app.get('/guardian-sports', (req, res) => {
    request('https://content.guardianapis.com/sports?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }
        return res.send(body.response.results);
    });
    
    // LHYTEtcuFBlGLAIesP38SR9oxgguaJz7        NY
})