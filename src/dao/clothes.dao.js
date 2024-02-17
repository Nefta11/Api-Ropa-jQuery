import Product from '../models/clothes.model.js'
const productDAO = {}

productDAO.getAll = async () => {
    const products = await Product.find();
    return products;
}

productDAO.getOne = async (bc) => {
    const product = await Product.findOne({ barcode: bc });
    return product
};

productDAO.insertProduct = async (product) => {
    const productSaved = new Product(product);
    productSaved.save();
    return true;
}

productDAO.updateProduct = async (bc, product) => {
    const productUpdated = await Product.findOneAndUpdate({ barcode: bc }, product);
    if (productUpdated != null)
        return true;
    else
        return false;
}

productDAO.delteProduct = async (bc) => {
    const productDeleted = await Product.findOneAndDelete({ barcode: bc });
    if (productDeleted != null)
        return true;
    else
        return false;
}

export default productDAO;