import { PersonFactory } from "./person-factory.ts";
import { Staff } from "./staff.ts";

export class StaffFactory extends PersonFactory {
	createPerson(
		id: string,
		firstName: string,
		lastName: string,
		birthDate: Date,
		nationality: string,
		...additionalParams: any[]
	): Staff {
		const [role, teamId, salary] = additionalParams;
		return new Staff(
			id,
			firstName,
			lastName,
			birthDate,
			nationality,
			role,
			teamId,
			salary,
		);
	}
}
