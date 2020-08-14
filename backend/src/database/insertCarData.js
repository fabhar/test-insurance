const sql = require('mssql')
const { user, password, server, database, port, instanceName } = require('../../.env');
let connectionData = {
    user: user,
    password: password,
    server: server,
    database: database,
    port: port,
    options: {
        encrypt: false,
        instanceName: instanceName
    }
}
function createTableCars(data) {

    const table = new sql.Table('cars');
    table.create = true;
    table.columns.add('id', sql.NVarChar(36), { nullable: false, primary: true });
    table.columns.add('name', sql.NVarChar(150), { nullable: false });
    table.columns.add('year', sql.NVarChar(50), { nullable: false });
    table.columns.add('increment', sql.NVarChar(10), { nullable: false });

    for (let index = 0; index < data.length; index++) {
        table.rows.add(data[index].id, data[index].name, data[index].year, data[index].increment)
    }

    const request = new sql.Request()
    request.bulk(table)
        .then(result => { console.log('Success - Car models are inserted in DB'), sql.close() })
        .catch(err => { console.log(`Erro : ${err}`), sql.close() })

}

function insertCarsData(data) {
    sql.connect(connectionData)
        .then(conn => createTableCars(data))
        .catch(err => console.log(`Erro : ${err}`));
}

module.exports = insertCarsData

