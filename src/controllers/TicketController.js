const Ticket = require("../models/Ticket");

module.exports = {
  async index(req, response) {
    const Tickets = await Ticket.find();
    return response.json(Tickets);
  },

  async store(req, response) {
    const {
      citizen_id,
      citizen_name,
      ticket_type,
      latitude,
      longitude,
    } = req.body;

    const location = {
      type: "Point",
      coordinates: [longitude, latitude],
    };

    const ticket = await Ticket.create({
      citizen_id,
      citizen_name,
      ticket_type,
      location,
    });

    return response.json(ticket);
  },
};
