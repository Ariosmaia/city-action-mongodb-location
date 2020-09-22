const mongoose = require("mongoose");
const PointSchema = require("./utils/PointSchema");

const TicketSchema = new mongoose.Schema({
  citizen_id: String,
  citizen_name: String,
  ticket_type: String,
  location: {
    type: PointSchema,
    index: "2dsphere",
  },
});

module.exports = mongoose.model("Ticket", TicketSchema);
