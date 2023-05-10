export interface UserUpdateEdto {
    userId: number;
    email: string;
    fullName: string;
    // password: string;
    active: boolean;
    roleId: number;
}