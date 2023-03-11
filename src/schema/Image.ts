import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ColumnType } from 'typeorm'
import { DeviceType } from '../utils/enum/DeviceType';

@Entity({name: "image"})
export class Image extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    width: number;

    @Column()
    height: number;

    @Column({
        name: "number_of_pixels"
    })
    numberOfPixels: number;

    @Column()
    format: string;

    @Column()
    url: string;

    @Column({
        name: "created_date",
        type: "timestamp"
    })
    createdDate: Date

    @Column({
        name: "last_modified_date",
        type: "timestamp"
    })
    lastModifiedDate: Date

    @Column()
    size: number;

    @Column({
        name: "captured_by"
    })
    capturedBy: string;

    @Column({
        type: "enum",
        enum: DeviceType
    })
    device: string
}