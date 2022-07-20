//HTML page template

// const employeeCard = employees => {
//     return `
//     < div class="" >
//       <div class="card-header ">
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

  module.exports = { generateHTML };