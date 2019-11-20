export class SignUpInfo {
    fullName: string;
    email: string;
    role: string[];
    password: string;

    constructor(fullName: string, email: string, password: string) {
        this.fullName = fullName;
        this.email = email;
        this.password = password;
        this.role = ['user'];
    }
}
