import { LocalAuthGuard } from './local-auth.guard';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';

import { UsersModule } from './../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule, UsersModule,
    JwtModule.register({
      secret: "reset",
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalAuthGuard]
})
export class AuthModule {}
