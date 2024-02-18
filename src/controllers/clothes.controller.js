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
            res.render('../src/views/edit',{clothe});
            else
                res.json({ status: "Product not found" })
        })
        .catch(err => res.json({ status: "Server unaivalible",message:err }))
}

//Nos muestra todos los elementos disponibles en la BD
export const insertClothe = (req, res) => {
    ClotheDAO.insertClothe(req.body)
        .then(result => {
            if (result)
            res.redirect('/')
        })
        .catch(err => res.json({ status: "Servidor no disponible" }));
};


export const updateClothe = (req, res) => {
    ClotheDAO.updateClothe(req.params.code, req.body)

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


export const deleteClothe = (req, res) => {
    ClotheDAO.deleteClothe(req.params.code)

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

