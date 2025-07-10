import { Person } from "./person.js";
import { CoachRole } from "./enums.js";

export class Coach extends Person {
	private licenseLevel: string;
	private teamId: string;
	private role: CoachRole;

	constructor(
		personId: string,
		firstName: string,
		lastName: string,
		dateOfBirth: Date,
		nationality: string,
		licenseLevel: string,
		teamId: string,
		role: CoachRole,
	) {
		super(personId, firstName, lastName, dateOfBirth, nationality);
		this.licenseLevel = licenseLevel;
		this.teamId = teamId;
		this.role = role;
	}

	public conductTraining(): void {
		console.log(
			`${this.role} ${this.getFullName()} is conducting training session`,
		);
	}

	public selectSquad(): void {
		console.log(`${this.getFullName()} is selecting the squad for the match`);
	}

	public getRole(): CoachRole {
		return this.role;
	}

	public getLicenseLevel(): string {
		return this.licenseLevel;
	}
}

// TESTING CODE FOR THIS CLASS
// const coach = new Coach(
// 	"C001",
// 	"John",
// 	"Doe",
// 	new Date("1980-01-01"),
// 	"American",
// 	"UEFA Pro",
// 	"T001",
// 	CoachRole.HEAD_COACH,
// );
// console.log(`Coach Name: ${coach.getFullName()}`);
// coach.conductTraining();
// coach.selectSquad();
// console.log(`Coach Role: ${coach.getRole()}`);
// console.log(`License Level: ${coach.getLicenseLevel()}`);
