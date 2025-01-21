import express from "express";
import { ProductModel } from "../db/ProductModel";

class ProductController {

  getAllProducts = async (request: express.Request, response: express.Response) => {
    try {
      const products = await ProductModel.find();
      return response.status(200).json({data: products});
    } catch (error) {
      return response.sendStatus(400);
    }
  }

  getProductById = async (request: express.Request, response: express.Response) => {
    try {
      const {id} = request.params;
      const product = await ProductModel.findById(id);
      return response.status(200).json({data: product});
    } catch (error) {
      return response.sendStatus(400);
    }
  }

  addProduct = async (request: express.Request, response: express.Response) => {
    try {
      const {imageUrl, name, count, size, weight} = request.body;
      const product = new ProductModel({
        imageUrl,
        name,
        count,
        size,
        weight
      });
      await product.save();
      return response.status(201).json({message: "Product added.", data: product});
    } catch (error) {
      return response.sendStatus(400);
    }
  }

  editProduct = async (request: express.Request, response: express.Response) => {
    try {
      const {id} = request.params;
      const {imageUrl, name, count, size, weight} = request.body;
      
      const product = await ProductModel.findById(id);
      if(product) {
        product.imageUrl = imageUrl;
        product.name = name;
        product.count = count;
        product.size = size;
        product.weight = weight;

        await product.save();
        return response.status(200).json({message: "Product edited.", data: product});
      }
      return response.sendStatus(400);
    } catch (error) {
      return response.sendStatus(400);
    }
  }

  deleteProduct = async (request: express.Request, response: express.Response) => {
    try {
      const {id} = request.params;
      await ProductModel.findByIdAndDelete({_id: id});
      return response.status(200).json({message: "Product deleted."});
    } catch (error) {
      return response.sendStatus(400);
    }
  }
}

export default new ProductController();