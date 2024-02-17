import { model } from 'mongoose';
import ClotheDAO from '../dao/clothes.dao.js'

//Nos muestra todos los elementos disponibles en la BD
export const getAll = (req, res) => {
    ClotheDAO.getAll()
        .then((clothes) => {
            res.render('../src/views/index',{clothes});
        })
        .catch((err) => {
            res.json(err);
        });
};

export const getOne = (req, res) => {
    ClotheDAO.getOne(req.params.code)
        .then((clothe) => {
            if (clothe != null)
            res.render('../src/views/edit',{clothes});
            else
                res.json({ status: "Product not found" })
        })
        .catch(err => res.json({ status: "Server unaivalible",message:err }))
}

//Nos muestra todos los elementos disponibles en la BD
export const insertProduct = (req, res) => {
    ClotheDAO.insertProduct(req.body)
        .then(result => {
            if (result)
            res.redirect('/')
        })
        .catch(err => res.json({ status: "Servidor no disponible" }));
};


export const updateProduct = (req, res) => {
    ClotheDAO.updateProduct(req.params.code, req.body)

        .then(product => {
            if (product)
            res.redirect('/');
                else
                res.json({
                    status: "server unavailable"
                });
        })
        .catch(err => {
            res.json({
                status: "server unavailable"
            });
        })
};


export const deleteProduct = (req, res) => {
    ClotheDAO.delteProduct(req.params.code)

        .then(clothe => {
            if (clothe)
            res.redirect('/');
                else
                res.json({
                    status: "server unavailable"
                });
        })
        .catch(err => {
            res.json({
                status: "server unavailable"
            });
        })
};

