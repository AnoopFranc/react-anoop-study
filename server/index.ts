import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from '../src/App'

import * as path from 'path';
import * as fs from 'fs'
import { getArticle } from "../src/api";
const app = express();


const PORT = process.env.PORT || 3006;

// const indexPath = path.resolve(__dirname,'..','public','index.html')
const indexPath = path.resolve(__dirname, './build', 'index.html');

const readIndexHtml = () => {
    let response
    fs.readFile(indexPath,'utf8',(err,html) => {
        if(err) {
            console.error('Error during file reading', err);
            // return res.status(404).end()
            throw err
        }
    response = html
    })
    return response
}

app.get('/',(req,res) => {
    try {
        let htmlData = readIndexHtml()  
        htmlData = (htmlData  as string)
        .replace(/\$OG_TITLE/g, "title")
        .replace(/\$OG_DESCRIPTION/g, "description")
        return res.send(htmlData);  
    } catch (error) {
        console.log('erro while reading ' , error)
        return res.status(404).end()
    }

})

app.get('/article/:id', async(req,res) => {
    let id = req.params.id
    try {
        let response = await getArticle(parseInt(id))
        try {
            let htmlData = readIndexHtml()  
            htmlData = (htmlData  as string)
            .replace(/\$OG_TITLE/g, response.data['heading'])
            .replace(/\$OG_DESCRIPTION/g, response.data['shortDescription'])
            return res.send(htmlData);  
        } catch (error) {
            console.log('erro while reading ' , error)
            return res.status(404).end()
        }       
    } catch (error) {
        console.log('erro while fetching article ' , error)
        return res.status(404).end()
    }

})

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(request, response) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    response.sendFile(filePath);
  });

app.listen(PORT, () => {
    return console.log(`server is  listening on ${PORT}`);
  });