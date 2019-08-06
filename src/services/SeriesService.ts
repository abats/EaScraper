import {Series} from "../entity/Series";

export class SeriesService{
    createSeries(): Series {
        const series = new Series()
        series.name = 'Lost';
        series.unique_name = 'lost';
        series.description = 'This is the description for lost';
        series.category = '|Action|Adventure|Drama';
        series.created_at = new Date();
        series.updated_at = new Date();
        return series;
    }
}
