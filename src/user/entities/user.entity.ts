import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';
import { TimestampEntity } from 'src/Generic/timestamp.entity';

@Entity('user') 
export class UserEntity extends TimestampEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false, unique: true })
  email: string;

  @Column({type: 'varchar', length: 255, nullable: false})
  password: string;
}
