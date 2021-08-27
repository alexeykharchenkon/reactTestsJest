const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@styles': resolvePath('./src/app/common/styles'),
            '@common': resolvePath('./src/app/common'),
            '@components': resolvePath('./src/app/components'),
        }
    },
  
}