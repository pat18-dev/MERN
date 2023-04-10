enum UserState {
  ACTIVE = "A",
  INACTIVE = "I",
}

export class User {
  userId: string;
  personId: string;
  state: UserState;

  constructor(id, personId, state) {
    this.userId = id;
    this.personId = personId;
    this.state = state;
  }

  static __fields__() {
    return ["userId", "personId", "state"];
  }
}
