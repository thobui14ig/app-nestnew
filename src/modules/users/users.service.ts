import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional';
import { TestService } from './../test/test.service';
import { User } from './user.entity';
@Injectable()
export class UsersService{
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private testService: TestService
) {
}

  @Transactional()
  async test() {
    // const user = this.userRepository.create({ email: 'sdsadsadsad' })
    
    // await this.userRepository.save(user);

    // await this.userRepository.createQueryBuilder('a')
    //   .insert()
    //   .values({ email: 'sdsadsadsad' })
    //   .execute()

    await this.userRepository.save({ id: 1, email: '22222' })


    return this.testService.test();
  }


}
