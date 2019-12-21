import * as request from 'request'
import { User } from './User'
import { Repo } from './Repo'

export class GithubApiService {
    private OPTIONS = {
        headers: {
            'User-Agent': 'request'
        },
        json: true
    }

    getUserInfo(username: string, callback: (user: User) => any) {

        request.get(`https://api.github.com/users/${username}`, this.OPTIONS, (error: any, response: any, body: any) => {
            let user = new User(body)
            callback(user)
        })
    }

    getRepos(username: string, callback: (repos: Repo[]) => any) {
        request.get(`https://api.github.com/users/${username}/repos`, this.OPTIONS, (error: any, response: any, body: any) => {
            let repoArray: Repo[] = body.map((repo: any) => {
                return new Repo(repo)
            })
            callback(repoArray)
        })
    }
}