import app from "./app.js";

console.log('Environment Variables:', {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
  FRONTEND_URL: process.env.FRONTEND_URL
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});

