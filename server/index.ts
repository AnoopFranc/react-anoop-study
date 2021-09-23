import express from "express";
import React from "react";
import {renderToString} from "react-dom/server";
import App from '../src/App'

import axios  from "axios";
import * as path from 'path';
import * as fs from 'fs'
const app = express();


app.use(express.static("public"));
const PORT = process.env.PORT || 3006;

const indexPath = path.resolve(__dirname,'..','public','index.html')

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
        .replace('__META_OG_TITLE__', "fifa")
        .replace('__META_OG_DESCRIPTION__', "abc")
        .replace('__META_DESCRIPTION__', "abcd")
        .replace('__META_OG_IMAGE__', "aaaa")    
        return res.send(htmlData);  
    } catch (error) {
        console.log('erro while reading ' , error)
        return res.status(404).end()
    }

})

app.get('/article/:id', (req,res) => {

})

app.listen(PORT, () => {
    return console.log(`server is  listening on ${PORT}`);
  });