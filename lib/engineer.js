const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, githubUser) {
    super(name, id, email)
    this.gitHubUser = githubUser;
    }
    getGithub() {
        return this.getGithub
    }
    getRole() {
    return engineer;
    }
  
}

module.exports = Engineer;