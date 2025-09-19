const express = require("express");

const app = express(); // ✅ call the function, not require it

app.listen(3000, () => {
  console.log("server is running");
  
});
