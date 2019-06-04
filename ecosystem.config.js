module.exports = {
  apps: [{
    name: 'fec-proxy',
    script: './server/index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-218-167-174.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/fec-proxy.pem',
      ref: 'origin/master',
      repo: 'git@github.com:nike-hratx41-fec/proxy-ken.git',
      path: '/home/ubuntu/proxy-ken',
      'post-deploy': 'npm install && npm run deploy-compile && pm2 startOrRestart ecosystem.config.js'
    }
  }
}