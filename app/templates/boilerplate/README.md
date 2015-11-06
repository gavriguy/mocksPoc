# Protype

A tool for generating HTML React based prototypes and host them on Githab Pages.

## Installation

The project is installed via Yeamon so all installation is done automatically
once you generate the project (`yo protype`).

## Creating your own prototypes.

All your code changes should be done in the `src` folder;
In there you see a `components` folder and an `index.js` file.

### components folder

List of components you want to run as the screens of your prototype and sub
components you want to use. The folder comes pre-filled with the Note components -
a helper component that allows you to add inline notes. See the Note component README.md
file for more info.

#### index.js

In the index file you configure React-Router routes. import there all the
components you want to present to the end user. You should use the components
screens you created on the components folder.

> Currently only React stateless components are supported.
If you want to import a React based class component wrap it in a stateless one
and use that component in routes section.


## Develop & Run locally

To see you prototype locally run webpack-dev-server
(you'll need to install it globally on your computer if its not already installed:
`$ npm install webpack-dev-server -g`)

Open your localhost at port 8080 to see the result. Protype will prompt you to
enter an accessKey to see your prototype - by default the accessKey is **abc**.

You can develop and tweak your components when webpack-dev-server is running -
it will update automatically on your browser.

## Changing default accessKey

To change the default accessKey -
run `$ npm run accessKey -- <YOUR NEW ACCESS KEY>` the encrypted key
will be stored at your project's `accessKey.json`
