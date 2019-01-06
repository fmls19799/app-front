var chalk = require("chalk");
var fs = require('fs');
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');
var isIonicProd = process.env.IONIC_ENV === 'prod';
var defaultProdEnvironment = 'prod';
var defaultDevEnvironment = 'int';

useDefaultConfig.prod.resolve.alias = {
    "@environment": path.resolve(environmentPath(defaultProdEnvironment))
};

useDefaultConfig.dev.resolve.alias = {
    "@environment": path.resolve(environmentPath(defaultDevEnvironment))
};

var customEnv = process.env.MY_ENV;

if (customEnv) {
    if (!isIonicProd) {
        // Default to dev config
        useDefaultConfig[customEnv] = useDefaultConfig.dev;
        useDefaultConfig[customEnv].resolve.alias = {
            "@environment": path.resolve(environmentPath(customEnv))
        };
        
    } else {
        useDefaultConfig.prod.resolve.alias = {
            "@environment": path.resolve(environmentPath(customEnv))
        };
    }
}



function environmentPath(env) {
    
    var filePath = './src/config/config.' + (env ? env.trim() : defaultDevEnvironment) + '.ts';
    
    if (!fs.existsSync(filePath)) {
        
        console.log(chalk.red('\n' + filePath + ' does not exist!'));
        
    } else {
        
        return filePath;
        
    }
    
}



module.exports = function() {
    
    return useDefaultConfig;
    
};