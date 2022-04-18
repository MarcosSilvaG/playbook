import { profile } from './profile_info.js'
const issues = {
	title: "Live 1 semana 3",
	repositoryNameAssociated: "MissionNodeJS",
	status: "Open",
	numberOfComments: 105,
	labels: ["-Live 1-", " -Semana 3-"],
	author: profile.username,
	dateCreated: "3 apr 2022",
	lastUpdated: "15 days ago",

	getTitleAndAuthor() {
		return `Title: ${this.title}\nAuthor: ${this.author}`
	},

	getGeneralInfo() {
		return `Title: ${this.title} Labels: ${this.labels}\nComments: ${this.numberOfComments}\nStatus: ${this.status}, Opened ${this.lastUpdated} by ${this.author}`
	},
}
console.log(issues.getTitleAndAuthor())
console.log("===General info===")
console.log(issues.getGeneralInfo())

