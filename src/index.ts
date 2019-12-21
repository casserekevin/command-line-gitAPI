import { GithubApiService } from './GithubApiService'
import * as _ from 'lodash'

import { User } from './User';
import { Repo } from './Repo';


if (process.argv.length < 3) {
    console.log('Please pass the username as an argument')
}
else {
    const username = process.argv[2]

    let githubApiService = new GithubApiService();
    githubApiService.getUserInfo(username, (user: User) => {
        githubApiService.getRepos(username, (repos: Repo[]) => {
            let sortedRepos = _.sortBy(repos, [(repo: Repo) => { return repo.getSize() * -1 }])
            let filteredRepos = _.take(sortedRepos, 5)
            user.setRepos(filteredRepos)
            console.log(user)
        })
    })
}