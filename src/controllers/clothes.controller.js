import { model } from 'mongoose';
import productDAO from '../dao/clothes.dao.js'

//Nos muestra todos los elementos disponibles en la BD
export const getAll = (req, res) => {
    productDAO.getAll()
        .then((products) => {
            res.render('../src/views/index',{products});
        })
        .catch((err) => {
            res.json(err);
        });
};

export const getOne = (req, res) => {
    productDAO.getOne(req.params.barcode)
        .then((product) => {
            if (product != null)
            res.render('../src/views/edit',{product});
            else
                res.json({ status: "Product not found" })
        })
        .catch(err => res.json({ status: "Server unaivalible",message:err }))
}

//Nos muestra todos los elementos disponibles en la BD
export const insertProduct = (req, res) => {
    productDAO.insertProduct(req.body)
        .then(result => {
            if (result)
            res.redirect('/')
        })
        .catch(err => res.json({ status: "Servidor no disponible" }));
};


export const updateProduct = (req, res) => {
    productDAO.updateProduct(req.params.barcode, req.body)

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
    productDAO.delteProduct(req.params.barcode)

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

