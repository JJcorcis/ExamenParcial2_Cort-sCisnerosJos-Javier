const { userData } = require('../datosRegistrados.js');


const getData = async (req, res) => {
    try {
        const { params: { id } } = req;
        //for each
        const foundData = userData.find(x => x.id == id);
        //trae estos datos
        const { firstName, lastName, maidenName, email, age, address, company: { title } } = foundData;

        res.send({
            status: 200,
            user: {
                FullName: `${firstName} ${lastName} ${maidenName}`,
                email,
                age,
                address,
                jobTitle: title
            },
        })
    } catch (error) {
        res.send("505")
    }
}

const updateData = async (req, res) => {
    try{
        const {params : { id }} = req;
        const {body: address} = req;
        const objeto = userData.find(obj => obj.id == id);
        userData[id-1].address = address;
        // const { }
        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }

        res.send({
            status: 200,
            user:{...userData[id-1]}
        })
    }catch(error){
        console.log(error);
        res.send({
            status:500,
            error});

    }
}

const createUser = async (req, res) => {
    try{
        const {body : { email }} = req;
        const newID = userData[userData.length-1].id +1;
        userData.push({"id":newID, email})
        res.send({
            status: 200,
            newID,
            email
        })
        console.log(userData)
    }catch(error){
        console.log(error);
        res.send({
            status:500,
            error});

    }
}

const deleteInfo = async (req, res) => {
    try {
        const {params : { id }} = req;
        const objeto = userData.find(obj => obj.id == id);

        if (!objeto) {
            res.send({
                status: 404,
                user: {}
            })
        }
        userData.splice(id-1, 1);
        res.send({
            status: 200,
        })
        console.log(userData)
    }catch(error){
        res.send({
            status:500,
            error});

    }
}

module.exports = {
    getData,
    updateData,
    createUser,
    deleteInfo
}