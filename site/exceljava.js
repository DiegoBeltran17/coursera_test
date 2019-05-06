import readXlsxFile from 'read-excel-file'

const input = document.getElementById('input')

input.addEventListener('change', () => {
  readXlsxFile(input.files[0]).then((data) => {
    // `data` is an array of rows
    // each row being an array of cells.
  })
})