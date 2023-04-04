enum UserState {
    ACTIVE = 'A',
    INACTIVE = 'I'
}

export class User {
    userid: string;
    personId: string;
    state: UserState;

    constructor(id, personId, state) {
        this.userid = id;
        this.personId = personId;
        this.state = state;
    }

    static __fields__(){
        return [
            "username",
            "password"
        ]
    }

};