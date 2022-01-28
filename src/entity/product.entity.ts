import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;
}
