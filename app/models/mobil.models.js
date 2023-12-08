module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            nama_mobil: String,
            brand_mobil: String,
            tahun_mobil: Number,
            tipe_mobil: String,
            asalnegara_mobil: String,
        }, {
            timestamp: true
        }
    );

    schema.method("toJSON", function () {
        const {__v, _id, ...object } = this.toObject();
        object.id_mobil = _id;
        return object;
    });

    return mongoose.model("mobil", schema);
}