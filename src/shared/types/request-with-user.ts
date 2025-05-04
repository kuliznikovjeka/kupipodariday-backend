import { Request } from 'express';

// users
import { User } from '../../users/entities/user.entity';

export interface RequestWithUser extends Request {
  user: User;
}
