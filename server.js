import server from "./app.js";
import { PORT } from "./solution.js";

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on 3000`);
});
