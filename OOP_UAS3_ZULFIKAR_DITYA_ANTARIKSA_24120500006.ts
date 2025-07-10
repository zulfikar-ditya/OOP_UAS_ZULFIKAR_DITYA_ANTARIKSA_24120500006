import { Club } from "./src1/club.ts";
import { Team } from "./src1/team.ts";
import { Player } from "./src1/player.ts";
import { TrainingSession } from "./src1/training-session.ts";
import { Stadium } from "./src1/stadium.ts";
import { Match } from "./src1/match.ts";
import { Sponsor } from "./src1/sponsor.ts";
import { Season } from "./src1/season.ts";
import { PlayerPosition, PlayerStatus, CoachRole } from "./src1/enums.ts";

import { PersonCreationService } from "./src2/person-creation-service.ts";

function createFCCakrawalaSystemWithFactory(): void {
	// Initialize Person Creation Service
	const personService = new PersonCreationService();

	// Create FC Cakrawala Club ==============================================================
	const fcCakrawala = new Club(
		"FC001",
		"FC Cakrawala",
		new Date("2020-01-01"),
		5000000,
		"Liga Mahasiswa Indonesia",
	);

	// Create FC Cakrawala Muda Team (U-23) ========================================
	const fcCakrawalaMuda = new Team(
		"TEAM001",
		"Liga Mahasiswa Indonesia",
		"U-23",
		"FC001",
		"FC Cakrawala Muda",
	);

	// Create Head Coach using Factory ===========================================
	const headCoach = personService.createCoach(
		"COACH001",
		"Budi",
		"Santoso",
		new Date("1980-05-15"),
		"Indonesia",
		"AFC Pro License",
		"TEAM001",
		CoachRole.HEAD_COACH,
	);

	// Create Assistant Coach using Factory ===========================================
	const assistantCoach = personService.createCoach(
		"COACH002",
		"Andi",
		"Wijaya",
		new Date("1985-03-20"),
		"Indonesia",
		"AFC B License",
		"TEAM001",
		CoachRole.ASSISTANT_COACH,
	);

	// Create Staff using Factory ===========================================
	const physicalTrainer = personService.createStaff(
		"STAFF001",
		"Sari",
		"Indah",
		new Date("1988-07-10"),
		"Indonesia",
		"Physical Trainer",
		"TEAM001",
		3000000,
	);

	const teamManager = personService.createStaff(
		"STAFF002",
		"Joko",
		"Susilo",
		new Date("1975-12-25"),
		"Indonesia",
		"Team Manager",
		"TEAM001",
		4000000,
	);

	// Create 15 Players using Factory ========================================
	const playerData = [
		{
			id: "PLAYER001",
			firstName: "Ahmad",
			lastName: "Fauzi",
			birthDate: new Date("2002-01-15"),
			jersey: 1,
			value: 50000,
			position: PlayerPosition.GOALKEEPER,
		},
		{
			id: "PLAYER002",
			firstName: "Rizki",
			lastName: "Pratama",
			birthDate: new Date("2001-11-22"),
			jersey: 2,
			value: 75000,
			position: PlayerPosition.DEFENDER,
		},
		{
			id: "PLAYER003",
			firstName: "Doni",
			lastName: "Setiawan",
			birthDate: new Date("2002-03-10"),
			jersey: 3,
			value: 80000,
			position: PlayerPosition.DEFENDER,
		},
		{
			id: "PLAYER004",
			firstName: "Fajar",
			lastName: "Nugraha",
			birthDate: new Date("2001-07-05"),
			jersey: 4,
			value: 85000,
			position: PlayerPosition.DEFENDER,
		},
		{
			id: "PLAYER005",
			firstName: "Bayu",
			lastName: "Anggoro",
			birthDate: new Date("2002-09-18"),
			jersey: 5,
			value: 70000,
			position: PlayerPosition.DEFENDER,
		},
		{
			id: "PLAYER006",
			firstName: "Yoga",
			lastName: "Purnomo",
			birthDate: new Date("2001-12-03"),
			jersey: 6,
			value: 90000,
			position: PlayerPosition.MIDFIELDER,
		},
		{
			id: "PLAYER007",
			firstName: "Reza",
			lastName: "Firmansyah",
			birthDate: new Date("2002-04-25"),
			jersey: 7,
			value: 95000,
			position: PlayerPosition.MIDFIELDER,
		},
		{
			id: "PLAYER008",
			firstName: "Ilham",
			lastName: "Saputra",
			birthDate: new Date("2001-08-14"),
			jersey: 8,
			value: 100000,
			position: PlayerPosition.MIDFIELDER,
		},
		{
			id: "PLAYER009",
			firstName: "Arif",
			lastName: "Wicaksono",
			birthDate: new Date("2002-06-30"),
			jersey: 9,
			value: 120000,
			position: PlayerPosition.FORWARD,
		},
		{
			id: "PLAYER010",
			firstName: "Dedi",
			lastName: "Kurniawan",
			birthDate: new Date("2001-10-12"),
			jersey: 10,
			value: 110000,
			position: PlayerPosition.FORWARD,
		},
		{
			id: "PLAYER011",
			firstName: "Eko",
			lastName: "Supriyanto",
			birthDate: new Date("2002-02-28"),
			jersey: 11,
			value: 85000,
			position: PlayerPosition.MIDFIELDER,
		},
		{
			id: "PLAYER012",
			firstName: "Fery",
			lastName: "Aditya",
			birthDate: new Date("2001-05-17"),
			jersey: 12,
			value: 60000,
			position: PlayerPosition.GOALKEEPER,
		},
		{
			id: "PLAYER013",
			firstName: "Galih",
			lastName: "Ramadhan",
			birthDate: new Date("2002-08-08"),
			jersey: 13,
			value: 75000,
			position: PlayerPosition.DEFENDER,
		},
		{
			id: "PLAYER014",
			firstName: "Hendra",
			lastName: "Gunawan",
			birthDate: new Date("2001-11-11"),
			jersey: 14,
			value: 80000,
			position: PlayerPosition.MIDFIELDER,
		},
		{
			id: "PLAYER015",
			firstName: "Indra",
			lastName: "Permana",
			birthDate: new Date("2002-01-01"),
			jersey: 15,
			value: 90000,
			position: PlayerPosition.FORWARD,
		},
	];

	const players: Player[] = playerData.map((data) =>
		personService.createPlayer(
			data.id,
			data.firstName,
			data.lastName,
			data.birthDate,
			"Indonesia",
			data.jersey,
			data.value,
			"TEAM001",
			data.position,
		),
	);

	// Add coaches, staff, and players to team ========================================
	fcCakrawalaMuda.addCoach(headCoach);
	fcCakrawalaMuda.addCoach(assistantCoach);
	players.forEach((player) => fcCakrawalaMuda.addPlayer(player));
	fcCakrawala.addTeam(fcCakrawalaMuda);

	// == Create Training Session, Stadium, Match, Sponsor, and Season ==========================
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

	// Staff work ==========================================
	physicalTrainer.work();
	teamManager.work();

	// Players train and play ==========================================
	players.slice(0, 5).forEach((player) => player.train());
	stadium.hostMatch(match);
	players.slice(0, 11).forEach((player) => player.playMatch());
	match.recordScore(2, 1);

	console.log("\n=== FC Cakrawala System Demo with Factory Pattern ===");
	console.log(`Club: ${fcCakrawala.getName()}`);
	console.log(`Team: ${fcCakrawalaMuda.getName()}`);
	console.log(`Players: ${fcCakrawalaMuda.getPlayers().length}`);
	console.log(`Coaches: ${fcCakrawalaMuda.getCoaches().length}`);
	console.log(
		`Staff: Physical Trainer - ${physicalTrainer.getFullName()}, Team Manager - ${teamManager.getFullName()}`,
	);
	console.log(
		`Stadium: ${stadium.getName()} (Capacity: ${stadium.getCapacity()})`,
	);
	console.log(`Match Report: ${match.generateReport()}`);
	console.log(`Season: ${season.getStandings()}`);
	console.log(`Sponsor: ${sponsor.getName()} - $${sponsor.getContractValue()}`);
	console.log("\nFactory Pattern Implementation:");
	console.log("- PersonFactory: Abstract factory for creating Person objects");
	console.log("- CoachFactory: Creates Coach instances");
	console.log("- PlayerFactory: Creates Player instances");
	console.log("- StaffFactory: Creates Staff instances");
	console.log("- PersonCreationService: Client that uses factories");
}

// Run the demo with Factory Method Pattern
createFCCakrawalaSystemWithFactory();
