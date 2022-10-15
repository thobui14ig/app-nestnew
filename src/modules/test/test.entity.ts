import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'test' })
export class Test {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;
}
