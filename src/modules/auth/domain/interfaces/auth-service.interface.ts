import { LoginUserDto } from '../../application/dto/login-user.dto';
import { RegisterUserDto } from '../../application/dto/register-user.dto';
import { UserResponseDto } from '../../application/dto/user-response.dto';

export const AUTH_SERVICE_KEY = 'AUTH_SERVICE';

export interface IAuthService {
  register(registerUserDto: RegisterUserDto): Promise<UserResponseDto>;
  login(loginUserDto: LoginUserDto): Promise<UserResponseDto>;
}
