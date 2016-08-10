# Restaurant Inspections Web App
## What
This web app shows information about Miami-Dade County's restaurant inspections, using this API: https://github.com/Code-for-Miami/restaurant-inspections-api/ It'll make it easier to find out which eateries make the grade, and which ones are failing inspections. 

#### Status
The prototype is currently being built.
We are discussing app design in issues and documenting in the [wiki](https://github.com/Code-for-Miami/restaurant-inspections-webapp/wiki)

## Why
It can be hard to find out which local restaurants are currently closed due to failed inspections, or which ones are guaranteed to provide a safe, tasty meal. However, Miami-Dade County's Restaurant Inspection website can be hard to use. This web app seeks to provide a simple alternative that works on nearly any device.

## Who
[Marcos Hernandez](https://github.com/marcoslhc) and Code for Miami


## How
#### Dependencies
This app uses Gulp, Node.js, NPM, TypeScript, and Angular.js

#### Install
1. Download/clone this repository
2. Enter the project folder
3. Run npm install 
More TBD

#### Deploy
TBD


#### Testing
TBD

## Contribute
We use the [Integration-Manager Workflow](https://git-scm.com/book/en/v2/Distributed-Git-Distributed-Workflows#Integration-Manager-Workflow)

First fork this repository and clone your fork in your computer. Add this repo as a remote after you clone your fork into your local

```sh
git add remote upstream https://github.com/Code-for-Miami/restaurant-inspections-webapp/
```

Repeat this for every new feature

```sh
git checkout develop                # 1. Branch from develop
git branch cool-new-feature         # 2. Create a new branch for your feature
git pull --rebase upstream/develop  # 3. Play your team's changes into your feature branch
git push origin cool-new-feature    # 4. Push to your origin
```

It is advisable to update your public branches often:

```sh
git checkout <branch>               # master or develop
git pull --rebase upstream/<branch> # Use rebase to update your local
git push origin <branch>            # Push your public fork
```

Make a PR from `cool-new-feature` in your fork against `develop` in https://github.com/Code-for-Miami/restaurant-inspections-webapp

## License
[LICENSE](https://github.com/Code-for-Miami/restaurant-inspections-webapp/blob/master/LICENSE)