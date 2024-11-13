<template>
    <div class="container mt-4">
        <h1 class="text-center text-primary mb-4 title">Lista de Tareas</h1>
        <div class="col-md-12 text-center">
            <button v-if="showButton" class="btn btn-info mb-3 bi-arrow-clockwise me-2" @click="fetchTasks">Cargar Tareas</button>
        </div>
        <div v-if="tasks.length > 0">
            <div v-for="task in tasks" :key="task.id">
                <div class="row">
                    <div class="col-12 mb-4">
                        <div class="card mb-3">
                            <div class="card-body d-flex justify-content-between align-items-center">
                                <div class="flex-grow-1 me-2">
                                    <h5  class="card-title m-0 text-decoration-line-through" :style="{ textDecoration: task.completed ? 'line-through' : 'none' }">{{ task.todo }}</h5>
                                    <span class="badge bg-success">{{ task.completed ? '' : '' }}</span>
                                    </div>
                                    <div class="d-flex">
                                    <button class="btn btn-outline-success me-2" @click="toggleTaskCompletion(task)"><i class="bi bi-check-circle"></i>
                                        {{ task.completed ? '' : '' }}
                                    </button>
                                    <button class="btn btn-outline-danger" @click="deleteTask(task)"><i class="bi bi-trash"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
export default {
    name: "TaskList",

    props: {
        showButton: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            tasks: [], // Almacenamiento local de las tareas traídas de la API
        };
    },
    methods: {
    // Llamada para obtener las tareas desde la API externa
        async fetchTasks() {
            try {
                const response = await fetch('https://dummyjson.com/todos');
                const data = await response.json();
                this.tasks = data.todos; // La API retorna un objeto con la propiedad 'todos' que contiene el array de tareas
            } catch (error) {
                console.error('Error al cargar las tareas:', error);
            }
        },

        // Cambiar el estado de una tarea (completada/no completada)
        toggleTaskCompletion(task) {
            task.completed = !task.completed;
        },

        // Eliminar la tarea seleccionada
        deleteTask(task) {
            this.tasks = this.tasks.filter((t) => t.id !== task.id);
        },

    },

};
</script>

<style>
.add-task-container {
    padding: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.input-group {
    display: flex;
    margin-bottom: 10px;
}

.task-input {
    flex-grow: 1;
    padding: 8px;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.add-button {
    padding: 8px 12px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
}

.task-list {
    margin-top: 20px;
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.completed {
    text-decoration: line-through;
    color: gray;
}
</style>
