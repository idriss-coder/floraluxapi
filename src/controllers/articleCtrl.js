const models = require('../models')
const Article = require("../models/article")    

function getArticles(_req, res){
    models.Article.findAll()
    .then(articles => {
        res.status(200).send(articles)
    })
}

function setArticle(article){
    return Article.create(article)
}

function updateArticle(article){
    return Article.update(article, {
        where: {
            id: article.id
        }
    })
}


function deleteArticle(id){
    return Article.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getArticles,
    setArticle,
    updateArticle,
    deleteArticle
}