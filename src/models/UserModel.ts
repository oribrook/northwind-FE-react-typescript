export class UserModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(userObject: UserModel) {
        this.firstName = userObject.firstName;
        this.lastName = userObject.lastName;
        this.email = userObject.email;
        this.password = userObject.password;        
    }
}