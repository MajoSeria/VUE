<template>
    <div>
        <h1 class="text-primary d-flex justify-content-center mt-4 mb-4 title" style="font-size: 70px; font-weight: bold;; text-align: center">
            <p>
                Bienvenido a la Aplicacion de Tareas con Vue
            </p>
            </h1>
            <h4 style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; text-align: center">
                <p>
                Esta aplicación te permite gestionar tus tareas de manera eficiente. Puedes añadir nuevas tareas manualmente o extraerlas desde una API.
                </p>
            </h4>
        <div class="img-fluid mb-4 d-flex justify-content-center">
        <img src="../assets/logo.png" alt="Logo" width="200" height="200" />
        </div>
        <h2 class="text-info mt-4" style="font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; text-align: center; font-weight: bold;"> Secciones de la Aplicacion</h2>
        <p class="text muted" style="font-family:Arial, Helvetica, sans-serif; text-align: center;;">
            <strong>Añadir Tareas:</strong> 
            Aquí puedes agregar nuevas tareas manualmente.
            <br>
            <strong>Lista de Tareas:</strong> 
            Aquí podras ver todas las tareas que tienes pendientes.
            <br>
            <strong>Vista combinada:</strong>
            Puedes eliminar tareas que ya no sean necesarias.
        </p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TodoItem',
    props: {
        title: String,
        completed: Boolean,
    },
    methods: {
        async toggleCompletion() {
            try {
                // Supón que hay una URL para actualizar la tarea
                const response = await axios.put(`https://dummyjson.com/todos${this.id}`, {
                    completed: !this.completed,
                });
                this.$emit('toggle-completion', response.data); // Emite el evento con los datos actualizados
            } catch (error) {
                console.error("Error al actualizar la tarea:", error);
            }
        },
        async deleteTodo() {
            try {
                await axios.delete(`https://api.example.com/todos/${this.id}`);
                this.$emit('delTodo');
            } catch (error) {
                console.error("Error al eliminar la tarea:", error);
            }
        }
    }
}
</script>
