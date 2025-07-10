import { CoachFactory } from "./coach-factory.ts";
import { PlayerFactory } from "./player-factory.ts";
import { StaffFactory } from "./staff-factory.ts";
import { Coach } from "../src1/coach.ts";
import { Player } from "../src1/player.ts";
import { Staff } from "./staff.ts";
import { CoachRole, PlayerPosition } from "../src1/enums.ts";

export class PersonCreationService {
	private coachFactory: CoachFactory;
	private playerFactory: PlayerFactory;
	private staffFactory: StaffFactory;

	constructor() {
		this.coachFactory = new CoachFactory();
		this.playerFactory = new PlayerFactory();
		this.staffFactory = new StaffFactory();
	}

	createCoach(
		...args: [
			id: string,
			firstName: string,
			lastName: string,
			birthDate: Date,
			nationality: string,
			license: string,
			teamId: string,
			role: CoachRole,
		]
	): Coach {
		return this.coachFactory.createPerson(...args);
	}

	createPlayer(
		...args: [
			id: string,
			firstName: string,
			lastName: string,
			birthDate: Date,
			nationality: string,
			jerseyNumber: number,
			marketValue: number,
			teamId: string,
			position: PlayerPosition,
		]
	): Player {
		return this.playerFactory.createPerson(...args);
	}

	createStaff(
		...args: [
			id: string,
			firstName: string,
			lastName: string,
			birthDate: Date,
			nationality: string,
			role: string,
			teamId: string,
			salary: number,
		]
	): Staff {
		return this.staffFactory.createPerson(...args);
	}
}
