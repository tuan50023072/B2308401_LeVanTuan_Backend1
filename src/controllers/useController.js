const create = (req,res) => {
    res.send({message : "craete handler"})
};

const findAll = (req,res) => {
    res.send({message : "findAll handler"})
};

const findOne = (req,res) => {
    res.send({message : "findOne handler"})
};

const update = (req,res) => {
    res.send({message : "update handler"})
};

const remove = (req,res) => {
    res.send({message : "remove handler"})
};

const removeAll = (req,res) => {
    res.send({message : "removeAll handler"})
};

const findAllFavorite = (req,res) => {
    res.send({message : "findAllFavorite handler"})
};

module.exports = {
    create,
    findAll,
    findOne,
    update,
    remove,
    removeAll,
    findAllFavorite
}