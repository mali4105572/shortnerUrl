import { userRole } from '../../enums/user-role';

export interface User {
    Name: string;
    Role: userRole;
}