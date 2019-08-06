import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("series2") // table name
export class Series {

    @PrimaryGeneratedColumn({

    })
    id: number;

    @Column({
        length: 100
    })
    unique_name: string;

    @Column({
        length: 100
    })
    name: string;

    @Column()
    description: string;

    @Column({
        type: 'datetime',
        nullable: true
    })
    firstaired: Date;

    @Column({
        length: 10,
        nullable: true
    })
    rating: string;

    @Column({
        nullable: true
    })
    rating_updated: Date;

    @Column({
        length: 10,
        nullable: true
    })
    imdb_id: string;

    @Column({
        length: 128,
        nullable: true
    })
    poster_image: string

    @Column({
        default: 0
    })
    poster_image_converted: boolean;

    @Column({
        length: 128,
        nullable: true
    })
    fanart_image: string

    @Column({
        default: 0
    })
    fanart_image_converted: boolean;

    @Column({
        length: 128,
        nullable: true
    })
    banner_image: string

    @Column({
        default: 0
    })
    banner_image_converted: boolean;

    @Column({
        length: 128
    })
    category: string;

    @Column({
        length: 25,
        nullable: true
    })
    status: string;

    @Column({
        default: 0
    })
    popular: boolean;

    @Column({
        default: 0
    })
    trend: number;

    @Column({
        nullable: true
    })
    season_amount: number;

    @Column({
        nullable: true
    })
    episode_amount: number;

    @Column({
        default: 0
    })
    has_specials: boolean;

    @Column({
        default: 0
    })
    specials_amount: number;

    @Column({
        type: 'timestamp'
    })
    created_at: Date;

    @Column({
        type: 'timestamp'
    })
    updated_at: Date;

}
