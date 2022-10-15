import { Injectable } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TestService{
  constructor(
    @InjectRepository(Test) private testRepository: Repository<Test>,
  ) {
  }

  async test() {
    // const data = this.testRepository.create({ number: 20 })

    // await this.testRepository.save(data)
    // return this.testRepository.createQueryBuilder('a')
    // .insert()
    // .values({ number: 'sdsadsa1111dsad' })
    // .execute()

    await this.testRepository.save({ id: 1, number: 22222 })

    // throw new Error();
  }

}
