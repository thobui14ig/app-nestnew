import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService){
    }

    async login(dto){ 
        // const user = await this.userService.findOne(dto.email, dto.password);
        // if(user){
        //     return {
        //         access_token: await this.SinUser(user.id, user.email, 'user'),
        //     }
        // } 
        // else return false;
    }

    //TẠO TOKEN
    SinUser(userId: number, email: string, type: string){
        return this.jwtService.sign({
            sub: userId, 
            email, 
            type: type
        })
    }

    async validateUser(username: string, pass: string): Promise<any> {
        // const user = await this.userService.findOne(username);
        // if (user && user.password === pass) {
        //   const { password, ...result } = user;
        //   return result;
        // }
        // return null;
      }

}
