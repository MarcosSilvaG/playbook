import { profile } from './profile_info.js'
const pullRequest = {
    title: "Update readme.md",
    branchName: "main",
    dateCreated: "April 8 2015",
    status: "Open",
    repositoryNameAssociated: "Launx",

    getStatus(){
        return `Status: ${this.status}`
    },
    getTitleAndAuthor(){
        return `Title: ${this.title}\nAuthor: ${profile.username}`
    }
}
console.log(pullRequest.getTitleAndAuthor())