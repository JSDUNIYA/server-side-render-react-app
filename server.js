import express from "express";
import React from "react";
import ReactDomServer from 'react-dom/server';
import App from './src/App.js';
import fs from "fs";
import path from "path";
const app = express();
const port = 3000;


app.use('*', (req, res) => {
   fs.readFile(path.resolve("./public/index.html"), "utf-8", (err, data) => {
    if(err){
        console.log(err);
        return res.status(500).send('Some error happned');
    }
    const html = ReactDomServer.renderToString(<App />);

    return res.send(data.replace('<div id="root"></div>',`<div id="root">${html}</div>`))
   })
  });

  app.listen(port, () => {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
  });