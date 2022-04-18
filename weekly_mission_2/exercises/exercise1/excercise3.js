
const pullRequest = {
    tite: "Update readme.md",
    branchName: "main",
    dateCreated: "April 8 2015",
    status: "Open",
    repositoryNameAssociated: this.repository,

    getStatus(){
        return `Status: ${this.status}`
    },
    getTitleAndAuthor(){
        return `Title: ${this.title}\nAuthor:`
    }

}