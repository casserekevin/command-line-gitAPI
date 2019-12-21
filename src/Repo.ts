export class Repo {
    private name: string
    private description: string
    private url: string
    private size: number
    private forkCount: number

    constructor(repo: any) {
        this.name = repo.name
        this.description = repo.description
        this.url = repo.html_url
        this.size = repo.size
        this.forkCount = repo.forks
    }

    getName() {
        return this.name
    }
    getDescription() {
        return this.description
    }
    getUrl() {
        return this.url
    }
    getSize() {
        return this.size
    }
    getForkCount() {
        return this.forkCount
    }


}