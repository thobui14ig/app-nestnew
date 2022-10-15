import type {
    CallHandler,
    ExecutionContext,
    HttpServer,
    NestInterceptor
} from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import type { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const REFLECTOR = 'Reflector';

@Injectable()
export class TestInterceptor implements NestInterceptor {
  constructor(
    @Inject(REFLECTOR) protected readonly reflector: any,
  ) {}


  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const keys = this.reflector.get('roles', context.getHandler());
    console.log('keys:::', keys);
    

    return next
      .handle()
      .pipe(
        tap(() => console.log(`Aftems`)),
      );
  }
}