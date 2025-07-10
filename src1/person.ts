export abstract class Person {
	protected personId: string;
	protected firstName: string;
	protected lastName: string;
	protected dateOfBirth: Date;
	protected nationality: string;

	constructor(
		personId: string,
		firstName: string,
		lastName: string,
		dateOfBirth: Date,
		nationality: string,
	) {
		this.personId = personId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dateOfBirth = dateOfBirth;
		this.nationality = nationality;
	}

	public getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	public getPersonId(): string {
		return this.personId;
	}

	public getAge(): number {
		const today = new Date();
		const birthDate = new Date(this.dateOfBirth);
		let age = today.getFullYear() - birthDate.getFullYear();
		const monthDiff = today.getMonth() - birthDate.getMonth();

		if (
			monthDiff < 0 ||
			(monthDiff === 0 && today.getDate() < birthDate.getDate())
		) {
			age--;
		}

		return age;
	}
}
