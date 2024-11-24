module.exports = {
  apps: [
    {
      name: "BarchinetLanding",
      exec_mode: "cluster",
      instances: 1, // Or a number of instances
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3002",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        NEXT_PUBLIC_GATEWAY: "https://api.barchinet.com:8443",
      },
      env_production: {
        NODE_ENV: "production",
        NEXT_PUBLIC_GATEWAY: "https://api.barchinet.com:8443",
      },
    },
  ],
};
