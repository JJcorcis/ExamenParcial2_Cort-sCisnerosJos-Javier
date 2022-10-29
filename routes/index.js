const express = require('express');

const {
    // createMovie,
    getData,
    createUser,
    updateData,
    deleteInfo} = require('../controlers');

    const router = express.Router();


    router.get('/get-user-data/:id', getData);
    router.put('/create-user/:correo', createUser);
    router.put('/update-user-address/:id', updateData);
    router.delete('/delete-user-info/:id', deleteInfo);


    module.exports = {
        router
    }