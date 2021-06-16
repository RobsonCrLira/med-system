import { Injectable, PipeTransform } from '@nestjs/common';
import { AppError } from 'src/errors/AppError';
import { SchemaOf } from 'yup';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private readonly schema: SchemaOf<{}>) { }

  async transform(value: any) {
    try {
      await this.schema.validate(value, { abortEarly: false });
    } catch (err) {
      throw new AppError(err);
    }
    return value;
  }
}
