//HTML page template

// const employeeCard = employees => {
//     return `
//     < div class="">
//       <div class="card-header">
//         <h2>${employees.name}</h2>
//         <h3>Employee</h3><i class=""></i>
//       </div>
//       <div class="card-info ">
//         <p class="idNumber">ID Number: ${employees.id}</p>
//         <p class="email">Email: ${employees.email}</p>
//       </div>
//     </div >
//     `
//   };
  
  const managerCard = manager => {
    return `
    < div class="col-4 m-2 p-2 border border-dark" >
      <div class="card-header">
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
      </div>
      <div class="card-body">
        <p class="idNumber">ID Number: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="officeNumber">Office Number: ${manager.officeNumber}</p>
      </div>
    </div >
    `
  };
  
  const engineerCard = engineer => {
    return `
    < div class="col-4 m-2 p-2 border border-dark" >
      <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
      </div>
      <div class="card-body">
        <p class="idNumber">ID Number: ${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
      </div>
    </div >
    `
  };
  
  const internCard = intern => {
    return `
    < div class="" >
      <div class="card-header ">
        <h2>${intern.name}</h2>
        <h3>Intern</h3><i class=""></i>
      </div>
      <div class="card-info ">
        <p class="idNumber">ID Number: ${intern.id}</p>
        <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="school">Intern's School: ${intern.school}</p>
      </div>
    </div >
    `
  };

  // push array to page 
const generateHTML = data => {
    //Array for Card Data
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
            const title = employee.getRole(); 

                if (title === 'Manager') {
                    const managerCard = managerCard(employee);

                    pageArray.push(managerCard);
                }

                if (title === 'Engineer') {
                    const engineerCard = engineerCard(employee);

                    pageArray.push(engineerCard);
                }

                if (title === 'Intern') {
                    const internCard = internCard(employee);

                    pageArray.push(internCard);
                }
            
    }

    // joining strings together before going to main HTML 
    const employeeCards = pageArray.join('')

    // return EVERYTHING to Team Data for generation
    const generateTeam = generateEmployeePage(employeeCards); 
    return generateTeam;
}

const generateEmployeePage = employeeCards => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
      <nav class="navbar" id="navbar">
        <h1 class="navbar-brand mb-0 h1 w-100 text-center bg-success" id="navbar-text">Team Info</h1> 
      </nav>
    </header>
    <main>
      <div class="row justify-content-center" id="team-cards">
        ${employeeCards}
      </div>
    </main>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
  `;

};


  module.exports = generateHTML;