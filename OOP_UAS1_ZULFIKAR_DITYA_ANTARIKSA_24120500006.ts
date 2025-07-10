import { Club } from "./src1/club.ts";
import { Team } from "./src1/team.ts";
import { Coach } from "./src1/coach.ts";
import { Player } from "./src1/player.ts";
import { TrainingSession } from "./src1/training-session.ts";
import { Stadium } from "./src1/stadium.ts";
import { Match } from "./src1/match.ts";
import { Sponsor } from "./src1/sponsor.ts";
import { Season } from "./src1/season.ts";
import { PlayerPosition, PlayerStatus, CoachRole } from "./src1/enums.ts";

function createFCCakrawalaSystem(): void {
	// Create FC Cakrawala Club ==============================================================
	const fcCakrawala = new Club(
		"FC001",
		"FC Cakrawala",
		new Date("2020-01-01"),
		5000000,
		"Liga Mahasiswa Indonesia",
	);

	// Create FC Cakrawala Muda Team (U-23) ================================================
	const fcCakrawalaMuda = new Team(
		"TEAM001",
		"Liga Mahasiswa Indonesia",
		"U-23",
		"FC001",
		"FC Cakrawala Muda",
	);

	// Create Head Coach and Assistant Coach =========================================
	const headCoach = new Coach(
		"COACH001",
		"Budi",
		"Santoso",
		new Date("1980-05-15"),
		"Indonesia",
		"AFC Pro License",
		"TEAM001",
		CoachRole.HEAD_COACH,
	);

	const assistantCoach = new Coach(
		"COACH002",
		"Andi",
		"Wijaya",
		new Date("1985-03-20"),
		"Indonesia",
		"AFC B License",
		"TEAM001",
		CoachRole.ASSISTANT_COACH,
	);

	// Create 15 Players (mahasiswa Universitas Cakrawala) ========================================
	const players: Player[] = [
		new Player(
			"PLAYER001",
			"Ahmad",
			"Fauzi",
			new Date("2002-01-15"),
			"Indonesia",
			1,
			50000,
			"TEAM001",
			PlayerPosition.GOALKEEPER,
		),
		new Player(
			"PLAYER002",
			"Rizki",
			"Pratama",
			new Date("2001-11-22"),
			"Indonesia",
			2,
			75000,
			"TEAM001",
			PlayerPosition.DEFENDER,
		),
		new Player(
			"PLAYER003",
			"Doni",
			"Setiawan",
			new Date("2002-03-10"),
			"Indonesia",
			3,
			80000,
			"TEAM001",
			PlayerPosition.DEFENDER,
		),
		new Player(
			"PLAYER004",
			"Fajar",
			"Nugraha",
			new Date("2001-07-05"),
			"Indonesia",
			4,
			85000,
			"TEAM001",
			PlayerPosition.DEFENDER,
		),
		new Player(
			"PLAYER005",
			"Bayu",
			"Anggoro",
			new Date("2002-09-18"),
			"Indonesia",
			5,
			70000,
			"TEAM001",
			PlayerPosition.DEFENDER,
		),
		new Player(
			"PLAYER006",
			"Yoga",
			"Purnomo",
			new Date("2001-12-03"),
			"Indonesia",
			6,
			90000,
			"TEAM001",
			PlayerPosition.MIDFIELDER,
		),
		new Player(
			"PLAYER007",
			"Reza",
			"Firmansyah",
			new Date("2002-04-25"),
			"Indonesia",
			7,
			95000,
			"TEAM001",
			PlayerPosition.MIDFIELDER,
		),
		new Player(
			"PLAYER008",
			"Ilham",
			"Saputra",
			new Date("2001-08-14"),
			"Indonesia",
			8,
			100000,
			"TEAM001",
			PlayerPosition.MIDFIELDER,
		),
		new Player(
			"PLAYER009",
			"Arif",
			"Wicaksono",
			new Date("2002-06-30"),
			"Indonesia",
			9,
			120000,
			"TEAM001",
			PlayerPosition.FORWARD,
		),
		new Player(
			"PLAYER010",
			"Dedi",
			"Kurniawan",
			new Date("2001-10-12"),
			"Indonesia",
			10,
			110000,
			"TEAM001",
			PlayerPosition.FORWARD,
		),
		new Player(
			"PLAYER011",
			"Eko",
			"Supriyanto",
			new Date("2002-02-28"),
			"Indonesia",
			11,
			85000,
			"TEAM001",
			PlayerPosition.MIDFIELDER,
		),
		new Player(
			"PLAYER012",
			"Fery",
			"Aditya",
			new Date("2001-05-17"),
			"Indonesia",
			12,
			60000,
			"TEAM001",
			PlayerPosition.GOALKEEPER,
		),
		new Player(
			"PLAYER013",
			"Galih",
			"Ramadhan",
			new Date("2002-08-08"),
			"Indonesia",
			13,
			75000,
			"TEAM001",
			PlayerPosition.DEFENDER,
		),
		new Player(
			"PLAYER014",
			"Hendra",
			"Gunawan",
			new Date("2001-11-11"),
			"Indonesia",
			14,
			80000,
			"TEAM001",
			PlayerPosition.MIDFIELDER,
		),
		new Player(
			"PLAYER015",
			"Indra",
			"Permana",
			new Date("2002-01-01"),
			"Indonesia",
			15,
			90000,
			"TEAM001",
			PlayerPosition.FORWARD,
		),
	];

	// Add coaches and players to team ========================================
	fcCakrawalaMuda.addCoach(headCoach);
	fcCakrawalaMuda.addCoach(assistantCoach);
	players.forEach((player) => fcCakrawalaMuda.addPlayer(player));
	fcCakrawala.addTeam(fcCakrawalaMuda);

	// Create training session and match ========================================
	const trainingSession = new TrainingSession(
		"TRAINING001",
		new Date("2025-07-15"),
		"Lapangan Universitas Cakrawala",
		"Tactical Training",
		"TEAM001",
	);

	const stadium = new Stadium(
		"STADIUM001",
		"Stadion Cakrawala",
		15000,
		"Universitas Cakrawala Campus",
	);

	const match = new Match(
		"MATCH001",
		new Date("2025-07-20"),
		new Date("2025-07-20T15:00:00"),
		"Liga Mahasiswa Indonesia",
		"TEAM001",
		"TEAM002",
		"STADIUM001",
		"SEASON2025",
	);

	// Create sponsor ========================================
	const sponsor = new Sponsor(
		"SPONSOR001",
		"Universitas Cakrawala",
		"Dr. Rektor",
		"021-123456",
		"sponsor@cakrawala.ac.id",
		1000000,
		new Date("2025-01-01"),
		new Date("2026-12-31"),
	);

	fcCakrawala.signSponsor(sponsor);

	// Create season ========================================
	const season = new Season(
		"SEASON2025",
		2025,
		"Liga Mahasiswa Indonesia",
		new Date("2025-07-01"),
		new Date("2025-12-31"),
	);

	season.addMatch(match);

	// Demo operations ========================================================
	fcCakrawalaMuda.scheduleTraining(trainingSession);
	headCoach.conductTraining();
	assistantCoach.conductTraining();

	// Players train
	players.slice(0, 5).forEach((player) => player.train());

	stadium.hostMatch(match);

	// Players play match
	players.slice(0, 11).forEach((player) => player.playMatch());

	match.recordScore(2, 1);

	console.log("\n=== FC Cakrawala System Demo ===");
	console.log(`Club: ${fcCakrawala.getName()}`);
	console.log(`Team: ${fcCakrawalaMuda.getName()}`);
	console.log(`Players: ${fcCakrawalaMuda.getPlayers().length}`);
	console.log(`Coaches: ${fcCakrawalaMuda.getCoaches().length}`);
	console.log(
		`Stadium: ${stadium.getName()} (Capacity: ${stadium.getCapacity()})`,
	);
	console.log(`Match Report: ${match.generateReport()}`);
	console.log(`Season: ${season.getStandings()}`);
	console.log(`Sponsor: ${sponsor.getName()} - $${sponsor.getContractValue()}`);
}

// Run the demo
createFCCakrawalaSystem();
