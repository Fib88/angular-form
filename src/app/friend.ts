export class Friend {
  private firstname: string;
  private lastname: string;
  private email: string;
  private phonenumber: number;
  private languages: [];
  constructor(firstname: string, lastname: string, email: string, phonenumber: number, languages: []) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phonenumber = phonenumber;
    this.languages = languages;
  }
}


