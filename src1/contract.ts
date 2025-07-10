export class Contract {
	private contractId: string;
	private startDate: Date;
	private endDate: Date;
	private salary: number;
	private clauses: string;
	private isActive: boolean;
	private personId: string;

	constructor(
		contractId: string,
		startDate: Date,
		endDate: Date,
		salary: number,
		clauses: string,
		personId: string,
	) {
		this.contractId = contractId;
		this.startDate = startDate;
		this.endDate = endDate;
		this.salary = salary;
		this.clauses = clauses;
		this.personId = personId;
		this.isActive = true;
	}

	public renew(): void {
		console.log(`Contract ${this.contractId} has been renewed`);
	}

	public terminate(): void {
		this.isActive = false;
		console.log(`Contract ${this.contractId} has been terminated`);
	}

	public getContractId(): string {
		return this.contractId;
	}

	public isContractActive(): boolean {
		const today = new Date();
		return this.isActive && today >= this.startDate && today <= this.endDate;
	}

	public getSalary(): number {
		return this.salary;
	}
}

// TESTING CODE FOR THIS CLASS
// const contract = new Contract(
// 	"C001",
// 	new Date("2020-01-01"),
// 	new Date("2022-01-01"),
// 	5000000,
// 	"Confidential",
// 	"COACH001",
// );
// console.log(`Contract ID: ${contract.getContractId()}`);
// console.log(`Is Contract Active? ${contract.isContractActive()}`);
// console.log(`Salary: $${contract.getSalary()}`);
// contract.renew();
// contract.terminate();
// console.log(`Is Contract Active? ${contract.isContractActive()}`);
