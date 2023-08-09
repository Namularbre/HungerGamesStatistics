class Model {
    async getTributes() {
        const response = await fetch('/api/tributes');
        return await response.json();
    }
}

class Controller {
    #model;
    #view;

    constructor() {
        this.#model = new Model();
        this.#view = new View();
    }

    async init() {
        const tributes = await this.#model.getTributes();

        this.#view.displayTributes(tributes);
    }
}

class View {
    tbody;

    constructor() {
        this.tbody = document.querySelector('tbody');
    }

    displayTributes(tributes) {
        if (tributes) {
            const template = document.querySelector('#tribute-template');

            for (const tribute of tributes) {
                const clone = template.content.cloneNode(true);

                const nameDiv = clone.querySelector('.tribute-name');
                const winsDiv = clone.querySelector('.tribute-wins');
                const killsDiv = clone.querySelector('.tribute-kills');
                const deathsDiv = clone.querySelector('.tribute-deaths');

                nameDiv.textContent = tribute.name;
                winsDiv.textContent = tribute.wins;
                killsDiv.textContent = tribute.kills;
                deathsDiv.textContent = tribute.deaths;

                this.tbody.appendChild(clone);
            }
        } else {
            const tributeData = document.querySelector('.tribute-data');
            tributeData.innerHTML = '<div>No tribute registered.</div>';
        }
    }
}

let controller = new Controller();

document.addEventListener('DOMContentLoaded', () => {
    controller.init()
        .catch(error => console.error(error));
});


