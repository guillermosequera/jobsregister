// const form = document.getElementById('registro-trabajo');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const descripcion = document.getElementById('descripcion').value;

//     const macAddress = getMacAddress();
//     const fecha = new Date();

    // Aquí se guarda la información en Google Sheets

    // Ejemplo usando la API de Google Sheets
    // const gapi = window.gapi;

    // gapi.load('client', () => {
    //     gapi.client.init({
    //         apiKey: 'AIzaSyDubc8Tb2qI9NUNPg8ZNFQ91NkfUqzhSO4',
    //         discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    //     });

//         const spreadsheetId = 'YOUR_SPREADSHEET_ID';
//         const range = 'Trabajos!A:D';

//         const values = [
//             [descripcion, macAddress, fecha.toLocaleString()],
//         ];

//         const body = {
//             values,
//         };

//         gapi.client.sheets.spreadsheets.values.append({
//             spreadsheetId,
//             range,
//             valueInputOption: 'USER_ENTERED',
//             resource: body,
//         }).then((response) => {
//             console.log('Trabajo registrado correctamente');
//             alert('Trabajo registrado correctamente');
//         });
//     });
// });

// Función para obtener el identificador MAC
// function getMacAddress() {
//     if (window.navigator.userAgent.indexOf("Mac") > 0) {
//         return window.navigator.hardwareConcurrency;
//     } else {
//         return "No disponible";
//     }
// }
