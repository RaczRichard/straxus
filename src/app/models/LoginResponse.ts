import Permission from "./Permission";

interface LoginResponse {
    id: number;
    role: string;
    username: string;
    token: string;
    roleName: string;
    permissions: Permission[];
}

export default LoginResponse;
