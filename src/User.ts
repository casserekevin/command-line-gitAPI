import { Repo } from "./Repo";

export class User {
    private login: string
    private fullname: string
    private repoCount: number
    private followerCount: number
    private repos?: Repo[]

    constructor(userResponse: any) {
        this.login = userResponse.login
        this.fullname = userResponse.name
        this.repoCount = userResponse.public_repos
        this.followerCount = userResponse.followers
        //this.login = userResponse.login
    }

    setRepos(repos: Repo[]) {
        this.repos = repos
    }

}