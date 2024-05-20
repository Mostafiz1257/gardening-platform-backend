import { TProduct } from './product.interface';
import { ProductModel } from './product.model';

//Add a new product
const createProductIntoDB = async (product: TProduct) => {
  const result = await ProductModel.create(product);
  return result;
};

//get all product from DB
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  return result;
};

//get a single product
const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  console.log(result);
  return result;
};

//update a product
const updateProductFromDB = async (id: string, updateData: any) => {
  try {
    const result = await ProductModel.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true },
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

//delete a product

export const productService = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductFromDB,
};
