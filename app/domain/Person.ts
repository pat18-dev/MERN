enum PersonTypeDocument {
  NN = "?",
  DNI = "D",
  PASSPORT = "P",
}

enum PersonGender {
  NN = "?",
  MASCULINE = "M",
  FEMENINE = "F",
}

export class Person {
  personId: string;
  typeDocument: PersonTypeDocument;
  documentNumber: string;
  name: string;
  lastName: string;
  gender: PersonGender;
  birthdate: string;
  password: string;
  mailAddress: string;
  phoneNumber: string;
  address: string;

  constructor(
    personId,
    typeDocument,
    documentNumber,
    name,
    lastName,
    gender,
    birthdate,
    password,
    mailAddress,
    phoneNumber,
    address
  ) {
    this.personId = personId;
    this.typeDocument = typeDocument;
    this.documentNumber = documentNumber;
    this.name = name;
    this.lastName = lastName;
    this.gender = gender;
    this.birthdate = birthdate;
    this.password = password;
    this.mailAddress = mailAddress;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }

  static __fields__() {
    return [
      "personId",
      "typeDocument",
      "documentNumber",
      "name",
      "lastName",
      "gender",
      "birthdate",
      "password",
      "mailAddress",
      "phoneNumber",
      "address",
    ];
  }
}
