const express = require('express')
const app = express()
const port = 5000
const request = require('request');
var cors = require('cors')
app.use(cors())

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

app.get('/guardian-politics', (req, res) => {
    request('https://content.guardianapis.com/politics?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {
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

app.get('/guardian-business', (req, res) => {
    request('https://content.guardianapis.com/business?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {
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

app.get('/guardian-technology', (req, res) => {
    request('https://content.guardianapis.com/technology?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {
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

app.get('/guardian-sports', (req, res) => {
    request('https://content.guardianapis.com/sport?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {
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

app.get('/guardian-expanded/', (req, res) => {
    var myUrl = req.query.id;
    
    request('https://content.guardianapis.com/'+myUrl+'?api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {

        if (err) { return console.log(err); }

        article = body.response.content;

        var linesOfDesc = [];
        var articleDesc = article.blocks.body[0].bodyTextSummary;
        linesOfDesc = articleDesc.split(".");
        var sCount = 0;
        var partOne = "", partTwo = "";
        while(sCount < 4) {
            partOne += linesOfDesc[sCount++];
        }
        partOne += ".";
        while(sCount < linesOfDesc.length) {
            partTwo += linesOfDesc[sCount++];
        }

        var singleArticle = {};
        singleArticle["title"] = article.webTitle;
        singleArticle["date"] = article.webPublicationDate.substring(0,10);
        singleArticle["partOne"] = partOne;
        singleArticle["partTwo"] = partTwo;
        singleArticle["section"] = article.sectionId;
        singleArticle["id"] = article.id;
        singleArticle["url"] = article.webUrl;
        singleArticle["name"] = "guardian";
            
        try {
            imageArray = article.blocks.main.elements[0].assets;
            singleArticle["image"] = imageArray[imageArray.length-1].file;
        }

        catch(e) {
            singleArticle["image"] = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
        }
        
        return res.send(singleArticle);
    });
})

app.get('/search/', (req, res) => {
    var keyword = req.query.q;
    
    request('https://content.guardianapis.com/search?q='+keyword+'&api-key=d0c2a4ae-6329-4c80-9de7-759c38aa620d&show-blocks=all', { json: true }, (err, resp, body) => {

        if (err) { return console.log(err); }

        articles = body.response.results;
        articleFormatted = [];

        for(i = 0; i < articles.length; i++)
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].webTitle;
            singleArticle["section"] = articles[i].sectionId;
            singleArticle["date"] = articles[i].webPublicationDate.substring(0,10);
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
})

app.get('/nytimes-home', (req, res) => {
    request('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LHYTEtcuFBlGLAIesP38SR9oxgguaJz7', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }

        articles = body.results;
        articleFormatted = [];

        for(i = 0; i < 10; i++)
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].title;
            singleArticle["section"] = articles[i].section;
            singleArticle["date"] = articles[i].published_date;
            singleArticle["description"] = articles[i].abstract;
            singleArticle["id"] = articles[i].url;
            singleArticle["url"] = articles[i].url;
            
            try {
                singleArticle["image"] = articles[i].multimedia[0].url;
            }

            catch(e) {
                singleArticle["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }

            articleFormatted.push(singleArticle);
        }
        return res.send(articleFormatted);
    });
})

app.get('/nytimes-world', (req, res) => {
    request('https://api.nytimes.com/svc/topstories/v2/world.json?api-key=LHYTEtcuFBlGLAIesP38SR9oxgguaJz7', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }

        articles = body.results;
        articleFormatted = [];

        for(i = 0; i < 10; i++)
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].title;
            singleArticle["section"] = articles[i].section;
            singleArticle["date"] = articles[i].published_date;
            singleArticle["description"] = articles[i].abstract;
            singleArticle["id"] = articles[i].url;
            singleArticle["url"] = articles[i].url;
            
            try {
                singleArticle["image"] = articles[i].multimedia[0].url;
            }

            catch(e) {
                singleArticle["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }

            articleFormatted.push(singleArticle);
        }
        return res.send(articleFormatted);
    });
})

app.get('/nytimes-politics', (req, res) => {
    request('https://api.nytimes.com/svc/topstories/v2/politics.json?api-key=LHYTEtcuFBlGLAIesP38SR9oxgguaJz7', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }

        articles = body.results;
        articleFormatted = [];

        for(i = 0; i < 10; i++)
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].title;
            singleArticle["section"] = articles[i].section;
            singleArticle["date"] = articles[i].published_date;
            singleArticle["description"] = articles[i].abstract;
            singleArticle["id"] = articles[i].url;
            singleArticle["url"] = articles[i].url;
            
            try {
                singleArticle["image"] = articles[i].multimedia[0].url;
            }

            catch(e) {
                singleArticle["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }

            articleFormatted.push(singleArticle);
        }
        return res.send(articleFormatted);
    });
})

app.get('/nytimes-business', (req, res) => {
    request('https://api.nytimes.com/svc/topstories/v2/business.json?api-key=LHYTEtcuFBlGLAIesP38SR9oxgguaJz7', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }

        articles = body.results;
        articleFormatted = [];

        for(i = 0; i < 10; i++)
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].title;
            singleArticle["section"] = articles[i].section;
            singleArticle["date"] = articles[i].published_date;
            singleArticle["description"] = articles[i].abstract;
            singleArticle["id"] = articles[i].url;
            singleArticle["url"] = articles[i].url;
            
            try {
                singleArticle["image"] = articles[i].multimedia[0].url;
            }

            catch(e) {
                singleArticle["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }

            articleFormatted.push(singleArticle);
        }
        return res.send(articleFormatted);
    });
})

app.get('/nytimes-technology', (req, res) => {
    request('https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=LHYTEtcuFBlGLAIesP38SR9oxgguaJz7', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }

        articles = body.results;
        articleFormatted = [];

        for(i = 0; i < 10; i++)
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].title;
            singleArticle["section"] = articles[i].section;
            singleArticle["date"] = articles[i].published_date;
            singleArticle["description"] = articles[i].abstract;
            singleArticle["id"] = articles[i].url;
            singleArticle["url"] = articles[i].url;
            
            try {
                singleArticle["image"] = articles[i].multimedia[0].url;
            }

            catch(e) {
                singleArticle["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }

            articleFormatted.push(singleArticle);
        }
        return res.send(articleFormatted);
    });
})

app.get('/nytimes-sports', (req, res) => {
    request('https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=LHYTEtcuFBlGLAIesP38SR9oxgguaJz7', { json: true }, (err, resp, body) => {
        if (err) { return console.log(err); }

        articles = body.results;
        articleFormatted = [];

        for(i = 0; i < 10; i++) 
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].title;
            singleArticle["section"] = articles[i].section;
            singleArticle["date"] = articles[i].published_date;
            singleArticle["description"] = articles[i].abstract;
            singleArticle["id"] = articles[i].url;
            singleArticle["url"] = articles[i].url;
            
            try {
                singleArticle["image"] = articles[i].multimedia[0].url;
            }

            catch(e) {
                singleArticle["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }

            articleFormatted.push(singleArticle);
        }
        return res.send(articleFormatted);
    });
})

app.get('/nytimes-expanded/', (req, res) => {
    var myUrl = req.query.id;

    request('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:"' + myUrl + '"&api-key=LHYTEtcuFBlGLAIesP38SR9oxgguaJz7', { json: true }, (err, resp, body) => {

        if (err) { return console.log(err); }

        article = body.response.docs[0];

        var linesOfDesc = [];
        var articleDesc = article.abstract;
        linesOfDesc = articleDesc.split(".");
        var sCount = 0;
        var partOne = "", partTwo = "";
        while(sCount < 4 && sCount < linesOfDesc.length) {
            partOne += linesOfDesc[sCount++];
        }
        partOne += ".";
        while(sCount < linesOfDesc.length) {
            partTwo += linesOfDesc[sCount++];
        }
    
        var singleArticle = {};
        singleArticle["title"] = article.headline.main;
        singleArticle["date"] = article.pub_date.substring(0,10);
        singleArticle["partOne"] = partOne;
        singleArticle["partTwo"] = partTwo;
        singleArticle["section"] = article.news_desk;
        singleArticle["url"] = article.web_url; 
        singleArticle["id"] = article.web_url;
        singleArticle["name"] = "nytimes";
       
        try {
            singleArticle["image"] = "https://nyt.com/" + article.multimedia[0].url;
        }

        catch(e) {
            singleArticle["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
        }
        return res.send(singleArticle);
    });
})

app.get('/searchNY/', (req, res) => {
    var keywordNY = req.query.q;
    
    request('https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+keywordNY+'&api-key=LHYTEtcuFBlGLAIesP38SR9oxgguaJz7', { json: true }, (err, resp, body) => {

        if (err) { return console.log(err); }

        articles = body.response.docs; 
        articleFormatted = [];

        for(i = 0; i < articles.length; i++)
        {
            var singleArticle = {};
            singleArticle["title"] = articles[i].headline.main;
            singleArticle["section"] = articles[i].news_desk;
            singleArticle["date"] = articles[i].pub_date.substring(0,10);
            singleArticle["description"] = articles[i].abstract;
            singleArticle["id"] = articles[i].web_url;
            singleArticle["url"] = articles[i].web_url;
            
            try {
                singleArticle["image"] = "https://www.nytimes.com/" + articles[i].multimedia[0].url;
            }
    
            catch(e) {
                singleArticle["image"] = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
            }

            articleFormatted.push(singleArticle);
        }
        return res.send(articleFormatted);
    });
})