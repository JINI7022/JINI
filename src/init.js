import app from "./server";

const PORT = 7022;

app.listen(PORT, () =>
  console.log(`Server has started successfully ✅ http://localhost:${PORT}`)
);
