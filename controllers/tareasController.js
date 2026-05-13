const crearTarea = (req, res) => {

    const nuevaTarea = req.body;

    res.json({
        mensaje: "Tarea creada correctamente",
        tarea: nuevaTarea
    });
};

module.exports = {
    crearTarea
};