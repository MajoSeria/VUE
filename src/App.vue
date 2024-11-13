<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <img src="./assets/logo.png" alt="Logo" width="40" height="40" class="d-inline-block align-top mr-2" />
            Gestor de Tareas
        </router-link>
        <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" class="collapse navbar-collapse d-flex justify-content-end">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/addtask" class="nav-link"><i class="bi bi-plus-circle me-2"></i>Agregar Tarea</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/tasklist" class="nav-link"><i class="bi bi-card-list me-2"></i>Lista de Tareas</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/combinedview" class="nav-link"><i class="bi bi-grid me-2"></i>Vista Combinada </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<script>
import router from './router';


export default {
  name: 'App',
  router
};
</script>


<!-- <style>
.add-task-container {
    padding: 10px;
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




