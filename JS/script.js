{
    const tasks = [];



    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString += `
            <li>
                <span>${task.content}</span>
                <button class="js-remove">🗑</button>
            </li>
            `;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
       
    }

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    
       

    

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
            return;
            }

              addNewTask(newTaskContent)
        });



    }


    init();
}
