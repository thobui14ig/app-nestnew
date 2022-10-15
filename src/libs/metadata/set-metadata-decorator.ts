import { SetMetadata } from '@nestjs/common';
export const Setkey = (...roles: string[]) => SetMetadata('roles', roles);