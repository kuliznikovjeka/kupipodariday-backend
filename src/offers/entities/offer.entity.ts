import { IsPositive } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';

// shared
import { BaseEntity } from '../../shared/base.entity';
// users
import { User } from '../../users/entities/user.entity';
// wishes
import { Wish } from '../../wishes/entities/wish.entity';

@Entity()
export class Offer extends BaseEntity {
  @Column({ precision: 10, scale: 2, type: 'decimal' })
  @IsPositive()
  amount: number;

  @Column({ default: false })
  hidden: boolean;

  @ManyToOne(() => Wish, (wish) => wish.offers)
  item: Wish;

  @ManyToOne(() => User, (user) => user.offers)
  user: User;
}
