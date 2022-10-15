
import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('users')
// @UseGuards(AuthGuard('jwt'))
// @ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService, 
    private readonly testService: UsersService) {}


  @Get('/test')
  postData() {
    return this.usersService.test();
  }

}
