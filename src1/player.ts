import { Person } from "./person.js";
import { PlayerPosition, PlayerStatus } from "./enums.js";

export class Player extends Person {
	private jerseyNumber: number;
	private marketValue: number;
	private teamId: string;
	private position: PlayerPosition;
	private status: PlayerStatus;

	constructor(
		personId: string,
		firstName: string,
		lastName: string,
		dateOfBirth: Date,
		nationality: string,
		jerseyNumber: number,
		marketValue: number,
		teamId: string,
		position: PlayerPosition,
		status: PlayerStatus = PlayerStatus.ACTIVE,
	) {
		super(personId, firstName, lastName, dateOfBirth, nationality);
		this.jerseyNumber = jerseyNumber;
		this.marketValue = marketValue;
		this.teamId = teamId;
		this.position = position;
		this.status = status;
	}

	public train(): void {
		console.log(`${this.getFullName()} is training as a ${this.position}`);
	}

	public playMatch(): void {
		if (this.status === PlayerStatus.ACTIVE) {
			console.log(
				`${this.getFullName()} (#${this.jerseyNumber}) is playing in the match`,
			);
		} else {
			console.log(
				`${this.getFullName()} cannot play due to status: ${this.status}`,
			);
		}
	}

	public getJerseyNumber(): number {
		return this.jerseyNumber;
	}

	public getPosition(): PlayerPosition {
		return this.position;
	}

	public getMarketValue(): number {
		return this.marketValue;
	}

	public getStatus(): PlayerStatus {
		return this.status;
	}

	public setStatus(status: PlayerStatus): void {
		this.status = status;
	}
}

// TESTING CODE FOR THIS CLASS
// const player = new Player(
// 	"P002",
// 	"John",
// 	"Smith",
// 	new Date("1995-05-15"),
// 	"British",
// 	10,
// 	5000000,
// 	"T001",
// 	PlayerPosition.MIDFIELDER,
// );
// console.log(`Player Name: ${player.getFullName()}`);
// player.train();
// player.playMatch();
// console.log(`Jersey Number: ${player.getJerseyNumber()}`);
// console.log(`Position: ${player.getPosition()}`);
// console.log(`Market Value: $${player.getMarketValue()}`);
// console.log(`Status: ${player.getStatus()}`);
