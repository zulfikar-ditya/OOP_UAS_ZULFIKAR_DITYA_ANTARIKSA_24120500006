import { Person } from "./person.ts";

export abstract class PersonFactory {
	abstract createPerson(
		id: string,
		firstName: string,
		lastName: string,
		birthDate: Date,
		nationality: string,
		...additionalParams: any[]
	): any;
}
