import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity("settings") // table name
export class Settings {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 32
    })
    key: string;

    @Column({
        length: 128
    })
    value: string;
}
