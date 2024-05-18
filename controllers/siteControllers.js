const Resources = require("../models/siteModels");

const getAllResource = async (request, response, next) => {
  await Resources.find({}).then((resources) =>
  response.status(200).json({
    success: { message: "This route points to the resource page with all of the resource" },
    data: resources,
    statusCode: 200,
  })
  )
};

const getResource = async (request, response, next) => {
  const { id } = request.params;

  try {
    const foundResource = await Resources.findById(id);
    if (!foundResource) {
      return response.status(404).json({
        error: { message: "Resource not found" },
        statusCode: 404,
      });
    }
    response.status(200).json({
      success: { message: "Found the Resource!" },
      data: foundResource,
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
  const { title, location, number, email, webpage, description, category } = request.body;

  const newResource = new Resources({
    title: title,
    location: location,
    number: number,
    email: email,
    webpage: webpage,
    description: description,
    category: category,
  });

  try {
    await newResource.save();
    response.status(201).json({
      success: {
        message: "A new Resource is created",
        data: newResource,
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
  const { title, location, number, email, webpage, description, category } = request.body;

  try {
    const updatedResource = await Data.findByIdAndUpdate(
      id,
      {
        title,
        location,
        number,
        email,
        webpage,
        description,
        category,
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
    const deleteResource = await Resources.findByIdAndDelete(id);
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



module.exports = { getAllResource, getResource, createResource, editResource, deleteResource};
