export class Friend {
  public firstname: string;
  public lastname: string;
  public email: string;
  public phonenumber: number;
  public languages: [];
  constructor(firstname: string, lastname: string, email: string, phonenumber: number, languages: []) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phonenumber = phonenumber;
    this.languages = languages;
  }
}


