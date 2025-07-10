import { Player } from "./player.js";
import { Coach } from "./coach.js";
import { TrainingSession } from "./training-session.js";
import { CoachRole, PlayerPosition, PlayerStatus } from "./enums.js";

export class Team {
	private teamId: string;
	private league: string;
	private division: string;
	private clubId: string;
	private name: string;
	private players: Player[] = [];
	private coaches: Coach[] = [];

	constructor(
		teamId: string,
		league: string,
		division: string,
		clubId: string,
		name: string,
	) {
		this.teamId = teamId;
		this.league = league;
		this.division = division;
		this.clubId = clubId;
		this.name = name;
	}

	public addPlayer(player: Player): void {
		if (this.players.length < 25) {
			this.players.push(player);
			console.log(`${player.getFullName()} has been added to ${this.name}`);
		} else {
			console.log(`Cannot add player. Squad is full.`);
		}
	}

	public removePlayer(player: Player): void {
		const index = this.players.indexOf(player);
		if (index > -1) {
			this.players.splice(index, 1);
			console.log(`${player.getFullName()} has been removed from ${this.name}`);
		}
	}

	public scheduleTraining(session: TrainingSession): void {
		console.log(
			`Training session scheduled for ${this.name}: ${session.getSessionId()}`,
		);
	}

	public getPlayers(): Player[] {
		return this.players;
	}

	public getCoaches(): Coach[] {
		return this.coaches;
	}

	public addCoach(coach: Coach): void {
		this.coaches.push(coach);
		console.log(
			`${coach.getFullName()} has been added as coach to ${this.name}`,
		);
	}

	public getName(): string {
		return this.name;
	}
}

// TESTING CODE FOR THIS CLASS
// const team = new Team(
// 	"T001",
// 	"Premier League",
// 	"Division 1",
// 	"CL001",
// 	"The Invincibles",
// );

// const player1 = new Player(
// 	"P001",
// 	"John",
// 	"Doe",
// 	new Date("1995-05-15"),
// 	"British",
// 	9,
// 	10000000,
// 	"T001",
// 	PlayerPosition.DEFENDER,
// 	PlayerStatus.ACTIVE,
// );

// team.addPlayer(player1);

// const coach1 = new Coach(
// 	"C001",
// 	"Jane",
// 	"Smith",
// 	new Date("1980-01-01"),
// 	"American",
// 	"UEFA Pro",
// 	"T001",
// 	CoachRole.ASSISTANT_COACH,
// );

// team.addCoach(coach1);

// const trainingSession = new TrainingSession(
// 	"TS001",
// 	new Date("2023-08-01"),
// 	"T001",
// 	"Morning Training",
// 	"T001",
// );

// team.scheduleTraining(trainingSession);

// console.log(`Team Name: ${team.getName()}`);
// console.log(
// 	`Players: ${team
// 		.getPlayers()
// 		.map((player) => player.getFullName())
// 		.join(", ")}`,
// );
// console.log(
// 	`Coaches: ${team
// 		.getCoaches()
// 		.map((coach) => coach.getFullName())
// 		.join(", ")}`,
// );
