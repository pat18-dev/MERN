class Login {
    username: string;
    password: string;

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    static __fields__(){
        return [
            "username",
            "password"
        ]
    }

};