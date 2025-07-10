export class Sponsor {
	private sponsorId: string;
	private name: string;
	private contactPerson: string;
	private phone: string;
	private email: string;
	private contractValue: number;
	private contractStartDate: Date;
	private contractEndDate: Date;

	constructor(
		sponsorId: string,
		name: string,
		contactPerson: string,
		phone: string,
		email: string,
		contractValue: number,
		contractStartDate: Date,
		contractEndDate: Date,
	) {
		this.sponsorId = sponsorId;
		this.name = name;
		this.contactPerson = contactPerson;
		this.phone = phone;
		this.email = email;
		this.contractValue = contractValue;
		this.contractStartDate = contractStartDate;
		this.contractEndDate = contractEndDate;
	}

	public renewContract(newEndDate: Date, newValue: number): void {
		this.contractEndDate = newEndDate;
		this.contractValue = newValue;
		console.log(`Sponsor contract with ${this.name} has been renewed`);
	}

	public getName(): string {
		return this.name;
	}

	public getContractValue(): number {
		return this.contractValue;
	}
}

// TESTING CODE FOR THIS CLASS
// const sponsor = new Sponsor(
// 	"S001",
// 	"TechCorp",
// 	"John Doe",
// 	"123-456-7890",
// 	"johndoe@techcorp.com",
// 	1000000,
// 	new Date("2023-01-01"),
// 	new Date("2024-01-01"),
// );

// console.log(`Sponsor Name: ${sponsor.getName()}`);
// console.log(`Contract Value: $${sponsor.getContractValue()}`);
