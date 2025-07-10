import { Match } from "./match.js";

export class Season {
	private seasonId: string;
	private year: number;
	private league: string;
	private startDate: Date;
	private endDate: Date;
	private matches: Match[] = [];

	constructor(
		seasonId: string,
		year: number,
		league: string,
		startDate: Date,
		endDate: Date,
	) {
		this.seasonId = seasonId;
		this.year = year;
		this.league = league;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public getMatches(): Match[] {
		return this.matches;
	}

	public getStandings(): string {
		return `Standings for ${this.league} ${this.year} season`;
	}

	public addMatch(match: Match): void {
		this.matches.push(match);
	}
}

// TESTING CODE FOR THIS CLASS--------
// const season = new Season(
// 	"S001",
// 	2023,
// 	"Premier League",
// 	new Date("2023-08-01"),
// 	new Date("2024-05-15"),
// );

// season.addMatch(
// 	new Match(
// 		"M001",
// 		new Date("2023-08-15"),
// 		new Date("15:00"),
// 		"Premier League",
// 		"T001",
// 		"T002",
// 		"S001",
// 		"S001",
// 	),
// );

// season.getMatches().forEach((match) => {
// 	console.log(`Match ID: ${match.getMatchId()}`);
// });

// console.log(season.getStandings());
