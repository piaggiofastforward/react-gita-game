# Piaggio Fast Forward
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/piaggio-fast-forward/piaggio-fast-forward)

## React Gita Game — react.js web app project template &nbsp; <a href="https://github.com/piaggiofastforward/react-gita-game"><img src="https://img.shields.io/github/stars/piaggiofastforward/react-gita-game.svg?style=social&label=Star&maxAge=3600" height="20"></a> <a href="https://twitter.com/p_f_f"><img src="https://img.shields.io/twitter/follow/p_f_f.svg?style=social&label=Follow&maxAge=3600" height="20"></a>

This has been adapted from [react-starter-kit](https://www.reactstarterkit.com/) with their setup instructions below. All code is released under an MIT license, and is freely editable. Please adopt the patterns present in the parent project, unless you believe they are done incorrectly and you can stand by your decision.

Follow these steps to complete this project:

1. [Download this repo](https://github.com/piaggiofastforward/react-gita-game/archive/master.zip).
2. Review the included [wireframe](./docs/designs/wireframes/1920_wireframe.pdf) to get colors, styles, and other design considerations.
3. Integrate https://www.npmjs.com/package/generate-maze for maze generation.
- The maze should be exactly 20 x 20.
- The maze should be closed.
- You will need to determine a start / end point.
- The maze and movement through the maze should be grid-based
4. Create a view to represent the generated maze layout in appropriate colors and shapes.
5. Integrate https://dmauro.github.io/Keypress/ if you use keyboard input, otherwise use mouse input.
6. Make the best version of the game that you can!
8. Send us your submission along with all git history.

### Game Design ###
The game is called *Gita Maze*, and in this game you will take a Gita and move it through an environment to reach the goal.
When you reach the goal the level is completed and your score is calculated and displayed.

#### Game Mechanics ####
- Gita starts with 100 energy.
- Gita loses energy over time (pick a decay rate that gives the game a sense of urgency.)
- Gita gains 20 energy when it picks up an energy pod (pick a frequency of energy pods that makes the game challenging.)
- When Gita's energy reaches 25 you are low on battery.
- When Gita's energy reaches 0 the game ends and your score is displayed.
- The score is calculated with the following equation (s = 3.14 * t + 50 * n) [s = score, t = time in seconds, n = number of energy pods collected]
- All scores are displayed as integers
- When you get to the goal, the game ends and your score is multiplied by 1.78 and displayed.
- You should not be able to reach the goal without picking up at least one energy container.

#### Game Icons ####
- **Normal operation**: gita_idle.png
- **Low Battery**: gita_lowBattery.png
- **Autonomous Mode**: gita_autonomous.png
- **Goal**: goalPost.svg
- **Energy Pod**: energyPod.svg

### How We Measure Success
You have created an awesome web based game where Gita does what it does best, congratulations!
Please send us a zipped up copy of your repository, along with all of your git history, we look forward to seeing your hard work :rocket:

### Bonus Points ###
If you would like to continue to make your project extra special, you will get extra points for completing any of the following:

- (+) You make a PR to fix something in this repo, and it is accepted.
- (+) You implement the sound effects found in /docs/designs/sounds.
- (+) The application is responsive and works on a variety of window sizes.
- (++) Multiple levels, with less energy pods as you get to higher levels.
- (+++) Implement logins and persistence between sessions, including previous scores.
- (+++) You implement a maze solving algorithm to allow Gita to complete the maze autonomously. If you do this, use gita_autonomous.png to represent Gita.

### License

Copyright © 2014-present Piaggio Fast Forward, inc. This source code is licensed under the MIT
license found in the [LICENSE.txt](https://github.com/piaggiofastforward/react-gita-game/blob/master/LICENSE.txt)
file. The documentation to the project is licensed under the
[CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/) license.



## React Starter Kit — "[isomorphic](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)" web app boilerplate &nbsp; <a href="https://github.com/kriasoft/react-starter-kit/stargazers"><img src="https://img.shields.io/github/stars/kriasoft/react-starter-kit.svg?style=social&label=Star&maxAge=3600" height="20"></a> <a href="https://twitter.com/ReactStarter"><img src="https://img.shields.io/twitter/follow/ReactStarter.svg?style=social&label=Follow&maxAge=3600" height="20"></a>

[React Starter Kit](https://www.reactstarterkit.com) is an opinionated boilerplate for web
development built on top of [Node.js](https://nodejs.org/),
[Express](http://expressjs.com/), [GraphQL](http://graphql.org/) and
[React](https://facebook.github.io/react/), containing modern web development
tools such as [Webpack](http://webpack.github.io/), [Babel](http://babeljs.io/)
and [Browsersync](http://www.browsersync.io/). Helping you to stay productive
following the best practices. A solid starting point for both professionals
and newcomers to the industry.

### Getting Started

  * Follow the [getting started guide](./docs/getting-started.md) to download and run the project
    ([Node.js](https://nodejs.org/) >= 6.5)
  * Check the [code recipes](./docs/recipes) used in this boilerplate, or share yours

### Learn More

  * [Getting Started with React.js](http://facebook.github.io/react/)
  * [Getting Started with GraphQL and Relay](https://quip.com/oLxzA1gTsJsE)
  * [React.js Questions on StackOverflow](http://stackoverflow.com/questions/tagged/reactjs)
  * [React.js Discussion Board](https://discuss.reactjs.org/)
  * [Flux Architecture for Building User Interfaces](http://facebook.github.io/flux/)
  * [Enzyme — JavaScript Testing utilities for React](http://airbnb.io/enzyme/)
  * [Flow — A static type checker for JavaScript](http://flowtype.org/)
  * [The Future of React](https://github.com/reactjs/react-future)
  * [Learn ES6](https://babeljs.io/docs/learn-es6/), [ES6 Features](https://github.com/lukehoban/es6features#readme)

### Related Projects

  * [GraphQL Starter Kit](https://github.com/kriasoft/graphql-starter-kit) — Boilerplate for building data APIs with Node.js, JavaScript (via Babel) and GraphQL
  * [Membership Database](https://github.com/membership/membership.db) — SQL schema boilerplate for user accounts, profiles, roles, and auth claims
  * [Babel Starter Kit](https://github.com/kriasoft/babel-starter-kit) — Boilerplate for authoring JavaScript/React.js libraries
