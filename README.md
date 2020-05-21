# legendary-broccoli-server

Put a description here!

## Development Environment Setup

#### Running locally

To get the app up and going, follow these steps:

##### Install NodeJS v10

Skip this if you already have NodeJS v10

- [install nvm](https://github.com/nvm-sh/nvm#install--update-script)
- restart your shell, or type `source ~/.zshrc` (or `source ~/.bashrc` if you use bash)
- install node v10 `nvm install 10`

##### Install Yarn

Skip this if you already have Yarn

- install yarn: `npm install -g yarn`

##### Running the app

- install dependencies `yarn install`
- create placeholder slack credentials
  - create a file called `.credentials` in the project root directory and copy/paste the contents of `.credentials-template` into it
  - we'll fill in those values later
- start a postgres db
  - the app is expecting db name "postgres", username "postgres", and port 5432
  - this comes for free if you start postgres with `brew services start postgresql`
- run migrations `yarn run migrations-local up` 
- start the server `yarn run start-local`

Check that the app is running by going to localhost:5000 in a browser. You should see that the service is "up".
