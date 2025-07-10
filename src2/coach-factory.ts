import { PersonFactory } from "./person-factory.ts";
import { Coach } from "../src1/coach.ts";
import { CoachRole } from "../src1/enums.ts";

export class CoachFactory extends PersonFactory {
	createPerson(
		id: string,
		firstName: string,
		lastName: string,
		birthDate: Date,
		nationality: string,
		...additionalParams: any[]
	): Coach {
		const [license, teamId, role] = additionalParams;
		return new Coach(
			id,
			firstName,
			lastName,
			birthDate,
			nationality,
			license,
			teamId,
			role,
		);
	}
}
