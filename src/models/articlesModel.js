import { Sequelize } from 'sequelize';
import {DataTypes} from 'sequelize/types';

function articleModel(Sequelize, DataTypes){
    const article = Sequelize.define({
        pk_article: {
            type: DataTypes.INTEGER,
        },        
        title: {
            type: DataTypes.STRING,
        }
    });

    return article
}

