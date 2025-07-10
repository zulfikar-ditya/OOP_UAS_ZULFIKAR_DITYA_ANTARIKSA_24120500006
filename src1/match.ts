export class Match {
	private matchId: string;
	private matchDate: Date;
	private matchTime: Date;
	private homeScore: number;
	private awayScore: number;
	private competition: string;
	private homeTeamId: string;
	private awayTeamId: string;
	private stadiumId: string;
	private seasonId: string;

	constructor(
		matchId: string,
		matchDate: Date,
		matchTime: Date,
		competition: string,
		homeTeamId: string,
		awayTeamId: string,
		stadiumId: string,
		seasonId: string,
	) {
		this.matchId = matchId;
		this.matchDate = matchDate;
		this.matchTime = matchTime;
		this.competition = competition;
		this.homeTeamId = homeTeamId;
		this.awayTeamId = awayTeamId;
		this.stadiumId = stadiumId;
		this.seasonId = seasonId;
		this.homeScore = 0;
		this.awayScore = 0;
	}

	public recordScore(homeScore: number, awayScore: number): void {
		this.homeScore = homeScore;
		this.awayScore = awayScore;
		console.log(`Match ${this.matchId} final score: ${homeScore}-${awayScore}`);
	}

	public generateReport(): string {
		return `Match Report - ${this.matchId}: ${this.homeScore}-${this.awayScore}`;
	}

	public getMatchId(): string {
		return this.matchId;
	}
}

// TESTING CODE FOR THIS CLASS--------
// const match = new Match(
// 	"M001",
// 	new Date("2023-10-01"),
// 	new Date("15:00"),
// 	"Premier League",
// 	"T001",
// 	"T002",
// 	"S001",
// 	"S001",
// );
// match.recordScore(2, 1);
// console.log(match.generateReport());
