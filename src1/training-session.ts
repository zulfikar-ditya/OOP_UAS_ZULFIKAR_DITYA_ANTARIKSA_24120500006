import { PlayerPosition, PlayerStatus } from "./enums.js";
import { Player } from "./player.js";

export class TrainingSession {
	private sessionId: string;
	private sessionDate: Date;
	private location: string;
	private focusArea: string;
	private teamId: string;
	private players: Player[] = [];

	constructor(
		sessionId: string,
		sessionDate: Date,
		location: string,
		focusArea: string,
		teamId: string,
	) {
		this.sessionId = sessionId;
		this.sessionDate = sessionDate;
		this.location = location;
		this.focusArea = focusArea;
		this.teamId = teamId;
	}

	public recordAttendance(player: Player, present: boolean): void {
		if (present && !this.players.includes(player)) {
			this.players.push(player);
			console.log(
				`${player.getFullName()} attended training session ${this.sessionId}`,
			);
		}
	}

	public getSessionId(): string {
		return this.sessionId;
	}

	public getAttendees(): Player[] {
		return this.players;
	}
}

// TESTING CODE FOR THIS CLASS
// const session = new TrainingSession(
// 	"TS001",
// 	new Date("2023-08-01"),
// 	"T001",
// 	"Morning Training",
// 	"T001",
// );

// const player = new Player(
// 	"P001",
// 	"John",
// 	"Doe",
// 	new Date("1990-01-01"),
// 	"American",
// 	10,
// 	1000000,
// 	"T001",
// 	PlayerPosition.DEFENDER,
// 	PlayerStatus.ACTIVE,
// );

// session.recordAttendance(player, true);
// console.log(`Attendees for session ${session.getSessionId()}:`);
// session.getAttendees().forEach((attendee) => {
// 	console.log(attendee.getFullName());
// });
