import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { User } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(
    private usuarioService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto): Promise<{ accessToken: string }> {
    const { email, password } = loginDto;
    const user: User | null = await this.usuarioService.findByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('credenciales incorrectas');
    }
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async validateUser(username: number, pass: string): Promise<any> {
    const user = await this.usuarioService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

}
