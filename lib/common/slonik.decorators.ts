import { Inject } from '@nestjs/common';
import { SlonikModuleOptions } from '../interfaces/index.js';
import { getPoolToken } from './slonik.utils.js';

export const InjectPool = (
  options?: SlonikModuleOptions | string,
): ParameterDecorator => Inject(getPoolToken(options));
