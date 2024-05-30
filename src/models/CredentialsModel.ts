export class CredentialsModel {
    email: string;
    password: string;

    constructor(cm: CredentialsModel) {
        this.email = cm.email;
        this.password = cm.password;
    }
}