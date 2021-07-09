const htmlBegin = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</head>

<body class="container-fullwidth">
    <div class="jumbotron jumbotron-fluid bg-primary">
        <div class="container">
            <h1 class="display-4 font-weight-bold">My Team</h1>
        </div>
    </div>
    <div class="row d-flex justify-content-around">
`
function createManagerCard(name, id,email, officeNumber ){
    return `
    <div class="card rounded m-2 " style="width: 18rem">
            <div class="card-body rounded-top bg-info">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">&#9749;Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
            </ul>
        </div>    
`
}
function createEngineerCard(name, id,email, github ){
    return `
    <div class="card rounded m-2 " style="width: 18rem">
            <div class="card-body rounded-top bg-info">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">&#9878; Engineer</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></li>
            </ul>
        </div> 
`
}
function createInternCard(name, id,email, school ){
    return `
    <div class="card rounded m-2" style="width: 18rem">
            <div class="card-body rounded-top bg-info">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">&#9997; Intern</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
            </ul>
        </div>    
`
}

const htmlEnd = `
    </div>

</body>

</html>
`

module.exports = {htmlBegin,createManagerCard, createEngineerCard, createInternCard, htmlEnd}