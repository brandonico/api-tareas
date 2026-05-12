const obtenerTareas = (req, res) => {

    const tareas = [
        { id: 1, titulo: "Estudiar" },
        { id: 2, titulo: "Hacer TP" }
    ];

    res.json(tareas);
};

module.exports = {
    obtenerTareas
};