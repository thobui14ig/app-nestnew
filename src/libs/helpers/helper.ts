import { Inject } from "@nestjs/common";
import { DataSource, EntityManager, getConnection } from "typeorm";

export async function dbTransactionWrap(operation: (...args) => any, manager?: EntityManager): Promise<any> {
    const connection = Inject(DataSource);
    if (manager) {
      return await operation(manager);
    } else {
    //   return await getConnection().transaction(async (manager) => {
    //     return await operation(manager);
    //   });
    console.log('====================================');
    console.log(connection);
    console.log('====================================');
    }
  }