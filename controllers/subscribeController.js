const Subscribe = require("../models/subscribeModels");

const subscribeNewsletter = (request, response, next) => {
    try {
      response.status(200).json({ success: "This has been successful" });
    } catch (error) {
      response.status(400).json({ error: "Something went wrong" });
    }
  };
  
  const deleteSubscribeNewsletter = async (request, response, next) => {
    const { id } = request.params;
  
    try {
      const deleteSubscribeNewsletter = await Subscribe.findByIdAndDelete(id);
      if (!deleteSubscribeNewsletter) {
        return res.status(404).json({
          error: { message: "Subscribe to Newsletter not found" },
          statusCode: 404
        });
      }
  
      response.status(200).json({
        success: "Subscribe to Newsletter deleted successfully!",
        statusCode: 200,
      });
    } catch (error) {
      response.status(400).json({
        error: "Something went wrong while deleting the book!",
        statusCode: 400,
      });
    }
  };

  module.exports = {deleteSubscribeNewsletter, subscribeNewsletter };