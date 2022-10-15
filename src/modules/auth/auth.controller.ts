
import { AuthLoginDto } from './dto/auth.login.dto';

import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService){}

    @Post('login')
    login(@Body() dto: AuthLoginDto){
        return this.AuthService.login(dto);
    }
}
