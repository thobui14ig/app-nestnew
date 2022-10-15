
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TestService } from './test.service';

@Controller('test')
@ApiTags('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
}
