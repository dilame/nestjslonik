import { DynamicModule, Module } from '@nestjs/common';
import { SlonikCoreModule } from './slonik-core.module.js';
import { SlonikModuleAsyncOptions, SlonikModuleOptions } from './interfaces/index.js';

@Module({})
export class SlonikModule {
  static forRoot(options: SlonikModuleOptions): DynamicModule {
    return {
      module: SlonikModule,
      imports: [SlonikCoreModule.forRoot(options)],
    };
  }

  static forRootAsync(options: SlonikModuleAsyncOptions): DynamicModule {
    return {
      module: SlonikModule,
      imports: [SlonikCoreModule.forRootAsync(options)],
    };
  }
}
