import { Person } from "./person.ts";

export class Staff extends Person {
	private role: string;
	private teamId: string;
	private salary: number;

	constructor(
		id: string,
		firstName: string,
		lastName: string,
		birthDate: Date,
		nationality: string,
		role: string,
		teamId: string,
		salary: number,
	) {
		super(id, firstName, lastName, birthDate, nationality);
		this.role = role;
		this.teamId = teamId;
		this.salary = salary;
	}

	work(): void {
		console.log(`${this.getFullName()} is working as ${this.role}`);
	}

	getRole(): string {
		return this.role;
	}

	getTeamId(): string {
		return this.teamId;
	}

	getSalary(): number {
		return this.salary;
	}
}
