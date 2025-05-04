import { IsEmail, IsUrl, Length } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';

// offers
import { Offer } from '../../offers/entities/offer.entity';
// shared
import { BaseEntity } from '../../shared/base.entity';
// wishes
import { Wish } from '../../wishes/entities/wish.entity';
// wishlists
import { Wishlist } from '../../wishlists/entities/wishlist.entity';
// constants
import { DEFAULT_USER_VALUES } from '../constants/default-user-values';

@Entity()
export class User extends BaseEntity {
  @Column({ default: DEFAULT_USER_VALUES.ABOUT })
  @Length(2, 200)
  about: string;

  @Column({ default: DEFAULT_USER_VALUES.AVATAR })
  @IsUrl()
  avatar: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @OneToMany(() => Offer, (offer) => offer.user)
  offers: Offer[];

  @Column()
  password: string;

  @Column({ unique: true })
  @Length(2, 30)
  username: string;

  @OneToMany(() => Wish, (wish) => wish.owner)
  wishes: Wish[];

  @OneToMany(() => Wishlist, (wishlist) => wishlist.owner)
  wishlists: Wishlist[];
}
