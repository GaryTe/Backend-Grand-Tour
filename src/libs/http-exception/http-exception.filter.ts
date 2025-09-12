import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus
} from '@nestjs/common';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm'; 

@Catch(QueryFailedError)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(_exception: QueryFailedError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: HttpStatus.BAD_REQUEST,
      message: 'A mistake on the client.'
    });
  }
}
