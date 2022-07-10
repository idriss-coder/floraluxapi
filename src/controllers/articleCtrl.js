const models = require('../models')
const Article = require("../models/article")    

function getArticles(_req, res){
    models.Article.findAll()
    .then(articles => {
        res.status(200).json([...articles])
    })
    .catch(err => {
        res.status(500).json({
            code: 500,
            message: "Erreur lors de la recuperation des articles "
        })
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