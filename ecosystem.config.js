module.exports = {
  apps : [{
    script: 'src/server.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user: 'aysfishh117',
      host: '78.46.11.32',
      ref  : 'origin/master',
      repo: 'git@github.com:IDRISSHACKER/floraluxapi.git',
      path: '/home/aysfishh117/web/api.guihon.cm',
      'pre-deploy-local': 'npm install',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
