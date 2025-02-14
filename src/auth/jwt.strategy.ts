import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    super();
  }

  async validate(username: number, pass: string): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const user = await this.authService.validateUser(username, pass);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
