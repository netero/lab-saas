const tasks = document.querySelectorAll('.task');
tasks.forEach(elem=>{
    elem.addEventListener('click',(event)=>{
        tasks.forEach(task=>{
            task.classList.remove('is-active')
        });
        event.target.closest('.task').classList.add('is-active');
    })
})