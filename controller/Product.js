import { mobileHandle } from "../model/Product.js";

export const AddProduct = async()=>{
    const {name,price,color} = req.body;
    const banner = req.file.filename;
    await mobileHandle({name,banner,price,color}).save();
    res.json({message:"Product Added Success"});
}