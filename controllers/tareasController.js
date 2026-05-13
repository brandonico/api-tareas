const tareas = [
    { id: 1, titulo: "Estudiar" },
    { id: 2, titulo: "Hacer TP" }
];

const obtenerTareas = (req, res) => {

    res.json(tareas);

};

const obtenerTareaPorId = (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
        return res.status(400).json({ error: "ID inválido" });
    }

    const tarea = tareas.find(t => t.id === id);

    if (!tarea) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    res.json(tarea);
};

const crearTarea = (req, res) => {
    
    const titulo = req.body.titulo ?? req.body.title;

    if (!titulo) {
        return res.status(400).json({ error: "El campo titulo es obligatorio" });
    }

    const nuevaTarea = {
        id: tareas.length > 0 ? Math.max(...tareas.map(t => t.id)) + 1 : 1,
        titulo
    };

    tareas.push(nuevaTarea);

    res.status(201).json({
        mensaje: "Tarea creada correctamente",
        tarea: nuevaTarea
    });
};

module.exports = {
    obtenerTareas,
    obtenerTareaPorId,
    crearTarea
};