import Clothe from '../models/clothes.model.js'
const ClotheDAO = {}

ClotheDAO.getAll = async () => {
    const clothes = await Clothe.find();
    return clothes;
}

ClotheDAO.getOne = async (cd) => {
    const clothe = await Clothe.findOne({ code: cd });
    return clothe
};

ClotheDAO.insertProduct = async (clothe) => {
    const clotheSaved = new Clothe(clothe);
    clotheSaved.save();
    return true;
}

ClotheDAO.updateProduct = async (cd, clothe) => {
    const clotheUpdated = await Clothe.findOneAndUpdate({ code: cd  }, clothe);
    if (clotheUpdated != null)
        return true;
    else
        return false;
}

ClotheDAO.delteProduct = async (cd) => {
    const clotheDeleted = await Clothe.findOneAndDelete({ code: cd  });
    if (clotheDeleted != null)
        return true;
    else
        return false;
}

export default ClotheDAO;