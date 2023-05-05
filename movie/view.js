const render = (movies) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <title>Movie list</title>
        <link rel="stylesheet" href="style.css" />
        </head>
        <body>
        <table>
        <thead><tr><th>Id</th><th>Title</th></tr></thead>
        <tbody>
        ${movies
            .map(movie => `
            <tr>
                <td>${movie.id}</td>
                <td>${movie.title}</td>
                <td><a href="/movie/delete/${movie.id}">delete</a></td>
                <td><a href="/movie/form/${movie.id}">edit</a></td>
            </tr>`
            )
            .join('')}
        </tbody>
        </table>
        <a href="/movie/form">new</a>
        </body>
        </html>
`;
};

module.exports = { render }