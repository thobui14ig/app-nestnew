import {registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

import {Injectable} from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';

@ValidatorConstraint({ name: 'isUserAlreadyExist', async: true })
@Injectable() // this is needed in order to the class be injected into the module
export class IsUserAlreadyExistConstraint  implements ValidatorConstraintInterface {
    constructor(protected readonly usersService: UsersService) {}

    async validate(text: string) {
        console.log(1111, this.usersService);
        
        // const user = await this.usersService.findOne();
        return true;
    }
}

export function IsUserAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsUserAlreadyExistConstraint,
      });
    };
  }