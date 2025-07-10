import { Match } from "./match.js";

export class Stadium {
	private stadiumId: string;
	private name: string;
	private capacity: number;
	private location: string;

	constructor(
		stadiumId: string,
		name: string,
		capacity: number,
		location: string,
	) {
		this.stadiumId = stadiumId;
		this.name = name;
		this.capacity = capacity;
		this.location = location;
	}

	public hostMatch(match: Match): void {
		console.log(`${this.name} is hosting match: ${match.getMatchId()}`);
	}

	public getName(): string {
		return this.name;
	}

	public getCapacity(): number {
		return this.capacity;
	}
}

// TESTING CODE FOR THIS CLASS
// const stadium = new Stadium("S001", "National Stadium", 50000, "City Center");

// console.log(`Stadium Name: ${stadium.getName()}`);
// console.log(`Stadium Capacity: ${stadium.getCapacity()}`);
