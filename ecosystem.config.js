module.exports = {
  apps: [
    {
      name: 'Yohaku',
      script: 'server.js',
      cwd: '/root/yohaku',
      env: {
        NODE_ENV: 'production',
        PORT: '2323',
        HOST: '127.0.0.1'
      }
    }
  ]
}
