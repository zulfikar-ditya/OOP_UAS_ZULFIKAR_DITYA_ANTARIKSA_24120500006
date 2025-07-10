import { PersonFactory } from "./person-factory.ts";
import { Player } from "../src1/player.ts";
import { PlayerPosition } from "../src1/enums.ts";

export class PlayerFactory extends PersonFactory {
	createPerson(
		id: string,
		firstName: string,
		lastName: string,
		birthDate: Date,
		nationality: string,
		...additionalParams: any[]
	): Player {
		const [jerseyNumber, marketValue, teamId, position] = additionalParams;
		return new Player(
			id,
			firstName,
			lastName,
			birthDate,
			nationality,
			jerseyNumber,
			marketValue,
			teamId,
			position,
		);
	}
}
