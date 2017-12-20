const path = require('path');
const webpack = require('webpack'); // used to transfer manually our node_env variable
                                    // to our javascript client side oherwise we will have
                                    // security, issues. this is used at bottom of the file in the
                                    // plugins property. see line 55


// the following lines(from line 28 to line 34) are used to configure our firebase databases
// one for development and the other one for testing(in combination with the test script in package.json 
// where we define our NODE_ENV to be equal to test using the npm package cross-env: this 
// assure a reliable cross os configuration )
// those cover only test and development envirement variable, in order for the app to work when deploy it on 
// heroku(production envirement): heroku is going to setup process.env.NODE_ENV to production
// we need to setup those variable from the console using heroku command
// using the heroku console fromthe console:
// run 'heroku config' command from the root of your app to see all config variables
// example : use 'heroku config:set KEY:VALUE' to set a new varible 
// note that we have to use the configuration in .env.development file: since this is the firebase database that we want to use in production envirement
// heroku config:set FIREBASE_ENV_KEY=AIzaSyD5jjZPAYSlQT8gt5uZnCljhY7g0o-clU4
// heroku config:set FIREBASE_AUTH_DOMAIN=expensify-96be3.firebaseapp.com
// heroku config:set FIREBASE_DATABASE_URL=https://expensify-96be3.firebaseio.com
// heroku config:set FIREBASE_PROJECT_ID=expensify-96be3
// heroku config:set FIREBASE_STORAGE_BUCKET=expensify-96be3.appspot.com
// heroku config:set FIREBASE_MESSAGING_SENDER_ID=616025545311
// use heroku confi:unset KEY_NAME to unset a variable
//  !!! do not forget to add the .env.test and .env.development files to the .gitignore file
// we don't want to upload those files to github(due to security, thos info must not be seen : sensible info according our database)
// watch next video for this

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: '.env.test'})
} else if (process.env.NODE_ENV ==='development') {
  require('dotenv').config({path: '.env.development'});
} 

// used to extract all css styles from the bundle.js file 
// and put them in a separate css style file
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isproduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public','dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            }, 
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_ENV_KEY': JSON.stringify(process.env.FIREBASE_ENV_KEY), 
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      })
    ],
    devtool: isproduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist/'
    }
  }
}

// comments for line 62: new webpack.DefinePlugin
// allow to transfer our firebase configuration manually to firebase.js file
      // this configuration is only working for development envirement. to make this configuration
      // to be working also in test envirement, we add some lines in the jest.config.json file( the setupFiles property)
      // JSON.stringify is needed in order to: when this beeing replaced in firebase.js(this will be as a the string iself: if not this will be a variable)