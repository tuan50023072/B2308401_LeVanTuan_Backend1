const express = require('express')
const {create,
    findAll,
    findOne,
    update,
    remove,
    removeAll,
    findAllFavorite} =require('../controllers/useController')

const router = express.Router();

router.route("/")
    .get(findAll)
    .post(create)
    .delete(removeAll);

router.route("/favorite")
    .get(findAllFavorite);
router.route("/:id")
    .get(findOne)
    .put(update)
    .delete(remove);

module.exports = router;