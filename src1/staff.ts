import { Person } from "./person.js";

export class Staff extends Person {
	private department: string;
	private staffId: string;
	private clubId: string;
	private role: string;

	constructor(
		personId: string,
		firstName: string,
		lastName: string,
		dateOfBirth: Date,
		nationality: string,
		department: string,
		staffId: string,
		clubId: string,
		role: string,
	) {
		super(personId, firstName, lastName, dateOfBirth, nationality);
		this.department = department;
		this.staffId = staffId;
		this.clubId = clubId;
		this.role = role;
	}

	public performDuties(): void {
		console.log(
			`${this.getFullName()} from ${this.department} is performing duties as ${
				this.role
			}`,
		);
	}

	public getDepartment(): string {
		return this.department;
	}

	public getRole(): string {
		return this.role;
	}
}

// TESTING CODE FOR THIS CLASS
// const staff = new Staff(
// 	"S001",
// 	"Jane",
// 	"Doe",
// 	new Date("1990-01-01"),
// 	"American",
// 	"Medical",
// 	"ST001",
// 	"CL001",
// 	"Physiotherapist",
// );

// staff.performDuties();
// console.log(`Department: ${staff.getDepartment()}`);
// console.log(`Role: ${staff.getRole()}`);
// console.log(`Staff Name: ${staff.getFullName()}`);
// console.log(`Perform Duties: ${staff.performDuties()}`);
