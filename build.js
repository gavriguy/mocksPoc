import webpack from 'webpack';
import pack from './package.json';
import config from './webpack.config.js';
import fs from 'fs-extra';
import path from 'path';

const BUILD_FOLDER = 'dist';

const webpackBuildHp = (config) => {
  config.output.path = `${__dirname}/${BUILD_FOLDER}`;
  config.entry = [
    //'webpack-dev-server/client?http://localhost:8080',
    //'webpack/hot/only-dev-server',
    './versionList/index.js',
  ];
  webpack(config, (err) => {
    if (err) {
    } else {
      console.log('Homepage bundle.js was successfully built!');
    }
  });
};

const webpackBuildVersion = (config) => {
  return new Promise((resolve, reject) => {
    config.output.path = `${__dirname}/${BUILD_FOLDER}/${pack.version}`;
    config.entry = [
      //'webpack-dev-server/client?http://localhost:8080',
      //'webpack/hot/only-dev-server',
      './prototypes/index.js',
    ];
    webpack(config, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log('Verion bundle.js was successfully built!');
        resolve();
      }
    });
  });
};

const createVersions = () => {
  let output = [];
  fs.readdir(`./${BUILD_FOLDER}`, (err, files) => {
    if (err) throw err;
    for (let index in files) {
      if (fs.lstatSync(`./${BUILD_FOLDER}/${files[index]}`).isDirectory()) {
        output.push(`"${files[index]}"`);
      }
    }
    fs.writeFile(`./${BUILD_FOLDER}/versions.json`, `[${output.join()}]`, (err2) => {
      if (err2) return console.log(err2);
      console.log('versions.json was successfully saved!');
    });
  });
}

const copyHtmls = () => {
  console.log(`${pack.version}`)
  fs.copySync(path.resolve(__dirname, './index.html'), `./${BUILD_FOLDER}/index.html`);
  fs.copySync(path.resolve(__dirname, './index.html'), `./${BUILD_FOLDER}/${pack.version}/index.html`);
}

webpackBuildHp(config);
webpackBuildVersion(config)
.then(() => {
  createVersions();
  copyHtmls();
});
