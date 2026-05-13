const tareas = [
    { id: 1, titulo: "Estudiar" },
    { id: 2, titulo: "Hacer TP" }
];

const obtenerTareas = (req, res) => {

    const tareas = [
        { id: 1, titulo: "Estudiar" },
        { id: 2, titulo: "Hacer TP" }
    ];

    res.json(tareas);
};

const obtenerTareaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json(tarea);
};

const crearTarea = (req, res) => {

    const nuevaTarea = req.body;

    res.json({
        mensaje: "Tarea creada correctamente",
        tarea: nuevaTarea
    });
};

module.exports = {
    obtenerTareas,
    obtenerTareaPorId,
    crearTarea
};