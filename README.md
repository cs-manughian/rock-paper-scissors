# rock-paper-scissors
Two player rock-paper-scissors game written in React TypeScript.

The basic requirements for the game are:

- Allow two players to enter their names
- One of the players can also be the computer, i.e. player vs computer
- Allow each to play a turn, one at a time, during which the player selects one of the option from rock, paper, scissors
- During each turn notify who has won and increment the scores

Notes on what I'd like to improve:

- Use stages in the game design instead of a single stage
- Submit button on first screen/stage
- Integrate SCSS
- More aesthetic images on buttons
- Implement visual feedback on buttons
- Save games via API
- Removed unused font files
- Better user win celebration
- Favor images over just text
- Use colors
- Track game details on the scoreboard such as the hand played
- Responsiveness with scoreboard
- Front-end tests
- Cross-browser testing

# Running the Project

Assuming npm is installed:
1. Install packages that the project depends on: `npm install`
2. Run the app in development mode: `npm start`

The app will automatically open in the browser on port 3000.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
