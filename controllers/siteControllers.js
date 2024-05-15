const Resources = require("../models/siteModels");
const getAllResource = async (request, response, next) => {
  try {
    await Comics.find({}).then((resource) => {
      response.status(200).json({ data: resources });
    });
  } catch (error) {
    next(error);
  }
};

const getResource = async (request, response, next) => {
  const { id } = request.params;

  try {
    const foundResources = await Resources.findById(id);
    if (!foundResources) {
      return response.status(404).json({
        error: { message: "Resource not found" },
        statusCode: 404,
      });
    }
    response.status(200).json({
      success: { message: "Found the Resource!" },
      data: foundResources,
      statusCode: 200,
    });
  } catch (err) {
    response.status(500).json({
      error: { message: "Something went wrong retrieving a Resource!" },
      statusCode: 500,
    });
  }
};

const createResource = async (request, response, next) => {
  const { title, location, number, email, webpage, description } = request.body;

  const newResource = new Resources({
    title: title,
    location: location,
    number: number,
    email: email,
    webpage: webpage,
    description: description,
  });

  try {
    await newResource.save();
    response.status(201).json({
      success: {
        message: "A new Resource is created",
        data: newBook,
        statusCode: 201,
      },
    });
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong creating a resource!" },
      statusCode: 400,
    });
  }
};
const editResource = async (request, response, next) => {
  const { id } = request.params;
  const { title, location, number, email, webpage, description } = request.body;

  try {
    const updatedResource = await Resources.findByIdAndUpdate(
      id,
      {
        title,
        location,
        number,
        email,
        webpage,
        description,
      },
      { new: true }
    );

    if (!updatedResource) {
      return response.status(404).json({
        error: { message: "Resource not found" },
        statusCode: 404,
      });
    }

    response.status(200).json({
      success: { message: "Resource is updated" },
      data: updatedResource,
      statusCode: 200,
    });
  } catch (error) {
    response.status(400).json({
      error: { message: "Something went wrong while editing the resource" },
      statusCode: 400,
    });
  }
};

const deleteResource = async (request, response, next) => {
  const { id } = request.params;

  try {
    const deleteResource = await Resource.findByIdAndDelete(id);
    if (!deleteResource) {
      return res.status(404).json({
        error: { message: "Resource not found" },
        statusCode: 404,
      });
    }

    response.status(200).json({
      success: "Resource deleted successfully!",
      statusCode: 200,
    });
  } catch (error) {
    response.status(400).json({
      error: "Something went wrong while deleting the Resource!",
      statusCode: 400,
    });
  }
};

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
    const deleteSubscribeNewsletter = await Resources.findByIdAndDelete(id);
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

module.exports = { getAllResource, getResource, createResource, editResource, deleteResource, deleteSubscribeNewsletter, subscribeNewsletter };
