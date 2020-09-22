const { Router } = require("express");
const routes = Router();
const TicketController = require("./controllers/TicketController");
const SearchController = require("./controllers/SearchController");

routes.get("/tickets", TicketController.index);
routes.post("/tickets", TicketController.store);

routes.get("/search", SearchController.index);

module.exports = routes;
