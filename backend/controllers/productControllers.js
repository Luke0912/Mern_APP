import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const createProduct = async(req,res) =>{
    const product = req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false,message:"Please provide all the details"})
    }

    const newProduct = new Product(product)

    try {
          await newProduct.save()
          return res.status(201).json({success:true,message:"Product created successfully",data:newProduct})
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json("Server Error")
    }
}

export const deleteProduct = async(req,res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"invalid product id"})
    }
    try {
        await Product.findByIdAndDelete(id)
        return res.status(200).json({success:true,message:"Product Deleted Successfully"})
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json("Server Error")
    }
}

export const getAllProduct = async(req,res) =>{
    try {
        const product = await Product.find({})
        return res.status(200).json({success:true,message:"Product Fetched Successfully",data:product})
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json("Server Error")
    }
}

export const updateProductById = async(req,res) =>{
    const {id} = req.params
    const product = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,message:"invalid product id"})
    }
    try {
        const updated = await Product.findByIdAndUpdate(id,product,{new:true})
        return res.status(200).json({success:true,message:"Product Updated Successfully",data:updated})
    } catch (error) {
        console.log('error: ', error);
        return res.status(500).json("Server Error")
    }
}

