/**
 * Mobile App React Native
 * =======================
 * A mobile application built using React Native for iOS and Android devices.
 *
 * Table of Contents
 * -----------------
 * [Getting Started](#getting-started)
 * [Project Structure](#project-structure)
 * [Installation](#installation)
 * [Usage](#usage)
 * [Contributing](#contributing)
 * [License](#license)
 */

const chalk = require('chalk');
const packageJson = require('./package.json');

console.log(chalk.green(`Mobile App React Native v${packageJson.version}`));

/**
 * @typedef {Object} ProjectStructure
 * @property {string} src - Source code directory
 * @property {string} assets - Assets directory
 * @property {string} components - React Native components directory
 * @property {string} screens - Screens directory
 * @property {string} utils - Utility functions directory
 * @property {string} services - Services directory
 * @property {string} tests - Tests directory
 */

/**
 * @typedef {Object} Installation
 * @property {string} yarn - Yarn installation command
 * @property {string} npm - NPM installation command
 * @property {string} ios - iOS installation command
 * @property {string} android - Android installation command
 */

/**
 * @typedef {Object} Usage
 * @property {string} start - Start the application command
 * @property {string} build - Build the application command
 * @property {string} deploy - Deploy the application command
 */

/**
 * @typedef {Object} Contributing
 * @property {string} issues - Issue tracker URL
 * @property {string} pullRequests - Pull request tracker URL
 * @property {string} contributions - Contributions guide URL
 */

/**
 * @typedef {Object} License
 * @property {string} type - License type
 * @property {string} url - License URL
 */

module.exports = {
  ProjectStructure,
  Installation,
  Usage,
  Contributing,
  License
};