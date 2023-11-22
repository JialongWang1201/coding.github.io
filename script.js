document.addEventListener('DOMContentLoaded', function() {
    function updateData() {
        document.getElementById('online-students').textContent = 'Online Students: ' + Math.floor(Math.random() * 20);
        document.getElementById('current-exams').textContent = 'Current Exams: ' + Math.floor(Math.random() * 5);
    }

    setInterval(updateData, 5000);
});
