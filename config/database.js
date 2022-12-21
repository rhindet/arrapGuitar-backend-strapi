module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdn7krsgqg4dscgm5t70-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_ah0p'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'PMOmPu1D07f1H3D0rcPrysOAr3U6tzSG'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
