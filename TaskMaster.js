class Task{
    constructor(taskName, description, assignTo, status, dueDate, currentId=0 ){
        this.name = taskName;
        this.description = description;
        this.assignedTo = assignTo;
        this.status = status;
        this.dueDate = dueDate;
        this.currentId = id;
        this.tasks = []

    
    }
    save(){
      let taskJson = JSON.stringify(this.task)
    }
    displayTask(){
        const data = `
        <li class="list-group-item border-0" id="${this.id}">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${this.name}: Assigned To: ${this.assignedTo}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${this.dueDate}</h6>
            <p class="card-text">${this.description}</p>
            <div class="btn-group">
        <button type="button" class="btn ${(this.status == 'ToDo') ? 'btn-warning' : (this.status == 'IN PROGRESS') ? 'btn-primary': (this.status == 'REVIEW') ? 'btn-info' : (this.status == 'DONE') ? 'btn-success': 'btn-warning'} dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" id="${this.id}-status">${this.status}</button>
        <ul class="dropdown-menu">
        <li><a class="dropdown-item" onclick="updateStatus('TODO', ${this.id})" id="todo">TODO</a></li>
        <li><a class="dropdown-item" onclick="updateStatus('IN PROGRESS',${this.id})" id="inprogress">IN PROGRESS</a></li>
        <li><a class="dropdown-item" onclick="updateStatus('REVIEW',${this.id})" id="review">REVIEW</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" onclick="updateStatus('DONE',${this.id})" id="done">DONE</a></li>
        </ul>
        </div>
            <button class="btn btn-outline-danger" onclick="removeTask(${this.id})"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg></button>
          </div>
        </div>
        </li>
        `;
        return data;
    }
}