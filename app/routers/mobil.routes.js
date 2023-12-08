module.exports = app => {
    const mobil = require("../controllers/mobil.controllers")
    const router = require("express").Router();

    router.get("/", mobil.findAll);
    router.get("/:id", mobil.show);
    router.post("/", mobil.create);
    router.put("/:id", mobil.update);
    router.delete("/:id", mobil.delete);

    app.use('/mobil', router);
}