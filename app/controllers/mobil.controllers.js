const db = require('../models');
const Mobil = db.mobil

exports.create = (req, res) => {
    req.body.tahun_mobil = new Number(req.body.tahun_mobil);

    Mobil.create(req.body)
        .then(() => {
            res.send({message: "Data Mobil Berhasil Disimpan"});
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error Menginputkan Data Mobil."
            });
        });
}

exports.findAll = (req, res) => {
    Mobil.find()
    .then((result) => {
        res.send(result);
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Error Mendapatkan Data Mobil."
        });
    });
}

exports.show = (req, res) => {
    const id = req.params.id;

    Mobil.findById(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: "Mobil Tidak Ditemukan dengan Id " + id
                });
            }
            res.send(result);
        }).catch((err) => {
            res.status(500).send({
                message: err.message || "Error Mendapatkan Mobil dengan Id " + id
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    req.body.tahun_mobil = new Number(req.body.tahun_mobil);

    Mobil.findByIdAndUpdate(id, req.body, {useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({message: "Tidak dapat Mengupdate data"})
                }
                res.send({ message: "Data Mobil Berhasil Diupdate" });
            })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Mobil.findByIdAndDelete(id)
        .then((result) => {
            if(!result) {
                res.status(404).send({
                    message: "Mobil Tidak Ditemukan Dengan Id " + id
                });
            }
            res.send({ message: "Mobil Berhasil Dihapus" });
        }).catch((err) => {
            res.status(500).send({

                message: err.message || "Gagal Menghapus Mobil dengan Id " + id
            });
        });
}

