// // import { TypeOrmCrudService } from '@dataui/crud-typeorm';
// import {
//   DeepPartial,
//   DeleteResult,
//   ObjectID,
//   ObjectLiteral,
//   Repository,
//   SaveOptions
// } from 'typeorm';
// import { Transactional } from 'typeorm-transactional';

// export class BaseCrudService<
//   Entity extends ObjectLiteral,
// > extends TypeOrmCrudService<Entity> {
//   constructor(protected repo: Repository<Entity>) {
//     super(repo);
//   }

//   save<T extends DeepPartial<Entity>>(
//     entity: T,
//     options?: SaveOptions,
//   ): Promise<T & Entity>;

//   save<T extends DeepPartial<Entity>>(
//     entity: T[],
//     options?: SaveOptions,
//   ): Promise<Array<T & Entity>>;

//   save(entity: any, options?: SaveOptions): Promise<any> {
//     return this.repo.save(entity, options);
//   }

//   remove<T extends Pick<Entity, 'id'>>(entity: T): Promise<DeleteResult>;

//   remove(entity: string | number | Date | ObjectID): Promise<DeleteResult>;

//   remove<T extends DeepPartial<Array<Pick<Entity, 'id'>>>>(
//     entity: T,
//   ): Promise<DeleteResult>;

//   remove(
//     // eslint-disable-next-line @typescript-eslint/unified-signatures
//     entity: string[] | number[] | Date[] | ObjectID[],
//   ): Promise<DeleteResult>;

//   @TrackingRemoveDecorator()
//   remove(entity: any): Promise<DeleteResult> {
//     if (
//       Array.isArray(entity) &&
//       typeof entity[0] === 'object' &&
//       'id' in entity[0]
//     ) {
//       return this.repo.delete(entity.map((item) => item.id));
//     }

//     if (
//       !Array.isArray(entity) &&
//       typeof entity === 'object' &&
//       'id' in entity
//     ) {
//       return this.repo.delete(entity.id);
//     }

//     return this.repo.delete(entity);
//   }

// //   @Transactional()
//   async updateOrCreate<
//     T extends DeepPartial<Entity>,
//     D extends DeepPartial<Entity>,
//   >(attributes: T, values: D) {
//     const data = await this.repo.findOneBy(attributes);

//     if (data) {
//       return this.repo.save({ ...data, ...values });
//     }

//     return this.repo.save({ ...attributes, ...values });
//   }
// }