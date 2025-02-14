import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
