module.exports = {
  apps: [
    {
      name: 'site',
      // max_memory_restart: '50M',
      // cron_restart: '1 0 0 * * *',
      script: './.output/server/index.mjs',
    },
  ],
}
