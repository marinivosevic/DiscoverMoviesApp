export type UserAuth = {
    token: string;
    user: User;
    active: boolean;
  
    }

export type User = {
    id: number;
    username: string;
    email: string;
   
}