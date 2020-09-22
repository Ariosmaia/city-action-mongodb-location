const Ticket = require("../models/Ticket");
module.exports = {
  async index(request, response) {
    const { latitude, longitude } = request.query;

    const tickets = await Ticket.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        },
      },
    });

    return response.json(tickets);
  },
};
