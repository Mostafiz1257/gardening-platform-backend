import { Request, Response } from 'express';
import { productService } from './product.service';
import { TProduct } from './product.interface';

const createProduct = async (req: Request, res: Response) => {
  try {
    // const product: TProduct = req.body;
    const { product: productData } = req.body;
    const result = await productService.createProductIntoDB(productData);
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to create new data',
      error: error,
    });
  }
};

//Get All product from DB
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productService.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: 'Successfully get all products',
      data: { result },
    });
  } catch (error) {}
};

//Get a single product by ID
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productService.getSingleProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: 'Successfully get the product Data',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to get the product Data',
      error: error,
    });
  }
};

//Update a product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const   updateData  = req.body;
    const result =await productService.updateProductFromDB(productId, updateData);
    
    if (result) {
        res.status(200).json({
          success: true,
          message: 'Product updated successfully',
          data: result,
        })
  }
}
  catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to update data',
      error: error,
    });
  }
};

export const ProductController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
};
