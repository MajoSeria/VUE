<template>
    <div>
        <!-- Usamos los componentes en el template -->
        <TaskList :showButton="false" />
        <AddTask :showTitle="false" />

    </div>
</template>

<script>
    import AddTask from '../views/AddTask.vue';
    import TaskList from '../views/TaskList.vue';

export default {
    name: "CombinedView",
    components: {
        TaskList,
        AddTask
    },
    data() {
        return {
            tasks: [], // Aquí se almacenarán las tareas cargadas de la API
            loading: false, // Bandera para indicar si las tareas se están cargando
            error: null, // Para almacenar errores
        };
    },
    methods: {
        // Método para cargar tareas de la API al montar el componente
        async loadTasks() {
            this.loading = true;
            try {
                const response = await fetch("https://api-ejemplo.com/tasks");
                if (!response.ok) throw new Error("Error al cargar las tareas");
                this.tasks = await response.json();
            } catch (err) {
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },

        // Método para agregar una tarea nueva
        async addTask(newTask) {
            try {
                const response = await fetch("https://api-ejemplo.com/tasks", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(newTask)
                });
                if (!response.ok) throw new Error("Error al agregar la tarea");

                const addedTask = await response.json();
                this.tasks.unshift(addedTask); // Añade la nueva tarea al inicio de la lista local
            } catch (err) {
                this.error = err.message;
            }
        }
    },
    mounted() {
        this.loadTasks(); // Cargar las tareas al montar el componente
    }
};

  // Esta sección debe permitir agregar tareas nuevas a la vez que extraer las tareas anteriores de la API
</script>

<!-- <style scoped>
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
</style> -->
