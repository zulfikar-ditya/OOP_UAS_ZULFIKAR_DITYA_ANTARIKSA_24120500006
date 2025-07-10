import { Team } from "./team.js";
import { Staff } from "./staff.js";
import { Sponsor } from "./sponsor.js";

export class Club {
	private clubId: string;
	private name: string;
	private foundedDate: Date;
	private budget: number;
	private league: string;
	private teams: Team[] = [];
	private staff: Staff[] = [];
	private sponsors: Sponsor[] = [];

	constructor(
		clubId: string,
		name: string,
		foundedDate: Date,
		budget: number,
		league: string,
	) {
		this.clubId = clubId;
		this.name = name;
		this.foundedDate = foundedDate;
		this.budget = budget;
		this.league = league;
	}

	public manageBudget(): void {
		console.log(`Managing budget for ${this.name}: $${this.budget}`);
	}

	public signSponsor(sponsor: Sponsor): void {
		this.sponsors.push(sponsor);
		console.log(
			`${this.name} has signed sponsorship deal with ${sponsor.getName()}`,
		);
	}

	public getTeams(): Team[] {
		return this.teams;
	}

	public addTeam(team: Team): void {
		this.teams.push(team);
		console.log(`${team.getName()} has been added to ${this.name}`);
	}

	public getName(): string {
		return this.name;
	}

	public getBudget(): number {
		return this.budget;
	}
}

// TESTING CODE FOR THIS CLASS--------
// const club = new Club(
// 	"C001",
// 	"FC Example",
// 	new Date("2000-01-01"),
// 	5000000,
// 	"Premier League",
// );
// console.log(`Club Name: ${club.getName()}`);
// console.log(`Budget: $${club.getBudget()}`);
// club.manageBudget();
