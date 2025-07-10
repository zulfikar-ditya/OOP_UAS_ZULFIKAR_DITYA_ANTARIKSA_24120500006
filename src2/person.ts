export abstract class Person {
	protected id: string;
	protected firstName: string;
	protected lastName: string;
	protected birthDate: Date;
	protected nationality: string;

	constructor(
		id: string,
		firstName: string,
		lastName: string,
		birthDate: Date,
		nationality: string,
	) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.birthDate = birthDate;
		this.nationality = nationality;
	}

	getFullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	getId(): string {
		return this.id;
	}

	getFirstName(): string {
		return this.firstName;
	}

	getLastName(): string {
		return this.lastName;
	}

	getBirthDate(): Date {
		return this.birthDate;
	}

	getNationality(): string {
		return this.nationality;
	}
}
