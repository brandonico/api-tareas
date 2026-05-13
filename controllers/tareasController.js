const tareas = [
    { id: 1, titulo: "Estudiar" },
    { id: 2, titulo: "Hacer TP" }
];

const obtenerTareaPorId = (req, res) => {
    const id = parseInt(req.params.id);
    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }
    res.json(tarea);
};

module.exports = {
    obtenerTareaPorId
};