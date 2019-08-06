import "reflect-metadata";
import { createConnection } from "typeorm";
import { Series } from "./entity/Series";
import { SeriesService } from "./services/SeriesService";
import * as TVDB from "node-tvdb";

createConnection().then(async connection => {

    //const TVDB = require('node-tvdb');
    const tvdb = new TVDB('5TBLCRAC6Z5KNIXM');
    const utils = new SeriesService();

    // tvdb.getSeriesByName('The Simpsons')
    //     .then((response: any) => {
    //         console.log(response);
    //     })


    var currentTime = Math.floor(Date.now() / 1000);
    let tempDate = new Date();
    let kak = tempDate.setHours(tempDate.getHours() - 2);
    let time2HoursAgo = Math.floor(kak / 1000);

    tvdb.getUpdates(time2HoursAgo, currentTime).then((response: any) => {
        console.log(response);
    }).catch( (error) => {
        console.log(error);
    })

    // Make a series and save it
    // let series = utils.createSeries();
    // await connection.manager.save(series);
    // console.log('added id: ' + series.id);
    //
    // // Collect the series from the database
    // const availableSeries = await connection.manager.find(Series);
    // console.log(availableSeries);
    // console.log("total series: ", availableSeries.length);
    //
    // // Close the connection and finish up
    // await connection.close();

}).catch(error => console.log(error));


