//compiled array information that gets put into Main HTML

const managerCard = manager => {
    return `
    <div class="card shadow-lg rounded" style="width: 20rem;">
    <div class="card-body">
       <div class="card-header bg-primary text-light">
           <h2 class="">${manager.name}</h2>
           <h3 class=""><i class="bi bi-cup-hot"></i> Manager</h2>
       </div
       <ul class="list-group list-group-flush">
           <li class="list-group-item">ID Number: ${manager.id}</li>
           <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
           <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
       </ul>
    </div>
    `
};

const engineerCard = engineer => {
    return `
    <div class="card shadow-lg rounded" style="width: 20rem;">
    <div class="card-body">
       <div class="card-header bg-primary text-light">
           <h2 class="">${engineer.name}</h2>
           <h3 class=""><i class="bi bi-eyeglasses"></i> Engineer</h2>
       </div
       <ul class="list-group list-group-flush">
           <li class="list-group-item">ID Number: ${engineer.id}</li>
           <li class="list-group-item">Email:<a href="mailto:${engineer.email}">${engineer.email}</a></li>
           <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
       </ul>
    </div>
    `
};

const internCard = intern => {
    return `
    <div class="card shadow-lg rounded" style="width: 20rem;">
     <div class="card-body">
        <div class="card-header bg-primary text-light">
            <h2 class="">${intern.name}</h2>
            <h3 class=""><i class="bi bi-mortarboard"></i> Intern</h2>
        </div
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID Number: ${intern.id}</li>
            <li class="list-group-item">Email:<a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">Intern's School: ${intern.school}</li>
        </ul>
     </div>
    </div>
    `
};

// push all the card and emplyee data in array to page 
const generateHTML = data => {
    //Array for Card Data
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const title = employee.getRole();

        if (title === 'Manager') {
            const manager = managerCard(employee);

            pageArray.push(manager);
        }

        if (title === 'Engineer') {
            const engineer = engineerCard(employee);

            pageArray.push(engineer);
        }

        if (title === 'Intern') {
            const intern = internCard(employee);

            pageArray.push(intern);
        }

    }

    // joining strings together before going to main HTML 
    const employeeCards = pageArray.join('')

    // return EVERYTHING to Team Data for generation
    const generateTeam = generateEmployeePage(employeeCards);
    return generateTeam;
}

//Page HTML template, where everything is inserted
const generateEmployeePage = employeeCards => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    </head>
    <body>
    <header>
      <nav class="navbar" id="navbar">
        <h1 class="navbar-brand mb-0 h1 w-100 text-center text-light font-monospace bg-danger" id="navbar-text">Team Info</h1> 
      </nav>
    </header>
    <main class="d-flex flex-wrap">
      <div class="justify-contnt-evenly">
        ${employeeCards}
      </div>
    </main>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
  `;
};


module.exports = generateHTML;