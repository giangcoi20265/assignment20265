import dotenv from "dotenv";
import axios from "axios";
import Product from "../models/product";
dotenv.config();



export const getAll = async (req, res) => {
    try {
        const { data: products } = await axios.get(`${process.env.API_URL}/products`);
        console.log(products)
     if(products.length === 0){
        return res.status(404).json({
            message:"ko cos sp nao"
        })
     } 
     return res.json({
        message:"lấy danh sách thành công",
        products
     });  
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }

}

export const get = async (req, res) => {
    try {
        const { data: products } = await axios.get(`${process.env.API_URL}/products/${req.params.id}`);
    
     if(!products){
        return res.status(404).json({
            message:"ko tìm thấy sản phẩm ạ"
        })
     } 
     return res.json({
        message:"lấy sản phẩm thành công ",
        products
     });  
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }

}
export const create = async (req, res) => {
    try {
        const { data: products } = await axios.post(`${process.env.API_URL}/products`,req.body);
    
     if(!products){
        return res.status(404).json({
            message:"thêm sản phẩm ko thành công"
        })
     } 
     return res.json({
        message:"thêm sản phẩm thành công ",
        products
     });  
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }

}
export const update = async (req, res) => {
    try {
        const { data: products } = await axios.put(`${process.env.API_URL}/products/${req.params.id}`,req.body);
    
     if(!products){
        return res.status(404).json({
            message:"update sản phẩm không thành công"
        })
     } 
     return res.json({
        message:"update sản phẩm thành công ",
        products
     });  
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }

}
export const remove = async (req, res) => {
    try {
        const { data: products } = await axios.delete(`${process.env.API_URL}/products/${req.params.id}`);
    
     if(!products){
        return res.status(404).json({
            message:"xóa ko thành công"
        })
     } 
     return res.json({
        message:"xóa sp  thành công ",
        products
     });  
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }

}

