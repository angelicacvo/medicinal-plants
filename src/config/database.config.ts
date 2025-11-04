export default () => ({
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432', 10),
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    name: process.env.DB_NAME || 'medicinal_plants'
  },
  auth: {
    jwtSecret: process.env.JWT_SECRET || 'super-secret-key',
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h'
  }
});
