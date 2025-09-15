import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const {
      headers
    } = context.switchToHttp().getRequest();
    const authorizationHeader = headers?.authorization?.split(' ');

    if (!authorizationHeader) {
      throw new UnauthorizedException('You have not passed authentication.');
    }

    const [, token] = authorizationHeader;

    if(token === "''" || !token) {
        throw new UnauthorizedException(`Invalid value: ${token}, in the title Authorization.`);
    }

    return true;
  }
}
