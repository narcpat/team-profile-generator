// create the manager section
const generateManager = manager => {
  return `
  <section class="manager mt-3 row" id="aboutManager">
          <h2>Manager</h2>
          <!-- MANAGER CARD -->
            <div class="card shadow" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><i class="fa-solid fa-id-card"></i>  ${manager.employeeId}</li>
                  <li class="list-group-item"><i class="fas-solid fa-at"></i>  <a href="mailto:${manager.email}">${manager.email}</a></li>
                  <li class="list-group-item"><i class="fa-solid fa-phone"></i>  <a href="tel:+${manager.officeNumber}"> ${manager.officeNumber}</a></li>
                  
                </ul>
              </div>
            </div>
          <!-- END of MANAGER CARD -->
  </section>
  `;
};

// create the employees section
const generateEngineer = engineer => {
  return `
  

          <!-- ENGINEER CARDS -->
          <div class="card shadow" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${engineer.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-id-card"></i>  ${engineer.employeeId}</li>
                <li class="list-group-item"><i class="fas-solid fa-at"></i>  <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item"><i class="fa-brands fa-github-square"></i> <a href="https://github.com/${engineer.github}">GitHub: ${engineer.github}</a></li>
              </ul>
            </div>
          </div>
          <!-- END of EMPLOYEE CARDS -->

  `;
};

// create the intern section
const generateIntern = intern => {
  return `
  <!-- INTERN CARDS -->
        
          <div class="card shadow" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Name</h5>
              <h6 class="card-subtitle mb-2 text-muted">Interns</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><i class="fa-solid fa-id-card"></i>  ${intern.employeeId}</li>
                <li class="list-group-item"><i class="fas-solid fa-at"></i>  <a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item"><i class="fa-solid fa-graduation-cap"></i> School: ${intern.school}</li>
              </ul>
            </div>
          </div>
        <!-- END of INTERN CARDS -->
  `;
};

// create the export function to generate the whole page
module.exports = templateData => {
  // destructure page data by section
  const { manager, engineer, intern } = templateData;
  console.log(templateData);
  console.log(engineer);
  console.log(intern);
  return `
      <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
      
      <link rel="stylesheet" href="./style.css">
    </head>
    <body>
      <!-- HEADER SECTION -->
      <header class="container mt-3 text-center">
        <h1>Team Profile</h1>
      </header>
      <!-- END OF HEADER -->

      <!-- MAIN CONTENT SECTION -->
      <main class="container">
        ${generateManager(manager)}
        <section class="employee mt-3 row" id="aboutEmployee">
          <h2>Employees</h2>
        ${engineer.map(engineer => generateEngineer(engineer)).join("")}
        </section>
        <section class="intern mt-3 row" id="aboutIntern">
          <h2>Interns</h2>
        ${intern.map(intern => generateIntern(intern)).join("")}
        </section>

      </main>
      <!-- END OF MAIN -->
    </body>
    </html>
  `;
};
