import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import {App} from '../src/App'
import ReactDOMServer from 'react-dom/server';


import * as path from 'path';
import * as fs from 'fs'
import { getArticle } from "../src/api";
const app = express();


const PORT = process.env.PORT || 3006;


// // const indexPath = path.resolve(__dirname,'..','public','index.html')
// const indexPath = path.resolve(__dirname, './build', 'index.html');
const indexFile = path.resolve(__dirname,'./index.html');
const readIndexHtml = () => {
    try {
        let response = fs.readFileSync(indexFile,'utf8')
        return response        
    } catch (error) {
        return 'error'
    }

}

app.get('/',(req,res) => {
    try {
        let htmlData = readIndexHtml() 
        // console.log('data',htmlData)
        // console.log(indexFile)
        if(htmlData !== 'error'){
            htmlData = (htmlData)
            .replace(/\$OG_TITLE/g, "title")
            .replace(/\$OG_DESCRIPTION/g, "description")
        }
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
            if(htmlData !== 'error'){
                    htmlData = (htmlData)
                    .replace(/\$OG_TITLE/g, response?.data['heading']?response?.data['heading']:"title")
                    .replace(/\$OG_DESCRIPTION/g, response?.data['shortDescription']?response?.data['shortDescription']:"description")
                }
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

app.use(express.static(path.resolve(__dirname)));

// app.get('*', function(request, response) {
//     const filePath = path.resolve(__dirname, 'index.html');
//     response.sendFile(filePath);
//   });

app.listen(PORT, () => {
    return console.log(`server is  listening on ${PORT}`);
  });