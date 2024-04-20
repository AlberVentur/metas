document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('goalForm');
    const input = document.getElementById('goalInput');
    const ul = document.getElementById('goalList');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const goalText = input.value.trim();
      if (goalText !== '') {
        const li = document.createElement('li');
        li.textContent = goalText;
        ul.appendChild(li);
        input.value = '';
        saveGoal(goalText);
      } else {
        alert('Por favor, escribe una meta válida.');
      }
    });
  
    // Cargar metas guardadas al cargar la página
    loadGoals();
  
    function saveGoal(goal) {
      // Guardar la meta en el almacenamiento local del navegador
      let goals = JSON.parse(localStorage.getItem('goals')) || [];
      goals.push(goal);
      localStorage.setItem('goals', JSON.stringify(goals));
    }
  
    function loadGoals() {
      // Cargar metas guardadas del almacenamiento local del navegador
      let goals = JSON.parse(localStorage.getItem('goals')) || [];
      goals.forEach(function(goal) {
        const li = document.createElement('li');
        li.textContent = goal;
        ul.appendChild(li);
      });
    }
  });
  