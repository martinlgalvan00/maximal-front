import Table from 'react-bootstrap/Table';

function TableCategoryWeigthMale() {
  return (
    <Table responsive="sm" striped bordered hover>
      <thead>
        <tr className='text-center'>
          <th className='w-25'>Categoría</th>
          <th className='w-75'></th>
        </tr>
      </thead>
      <tbody className='text-center'>
        <tr>
          <td>52kg</td>
          <td>Hasta 52.00kg</td>
        </tr>
        <tr>
          <td>56kg</td>
          <td>Desde 52.01kg hasta 56.00kg</td>
        </tr>
        <tr>
          <td>60kg</td>
          <td>Desde 56.01kg hasta 60.00kg</td>
        </tr>
        <tr>
          <td>67.5kg</td>
          <td>Desde 60.00kg hasta 67.50kg</td>
        </tr>
        <tr>
          <td>75kg</td>
          <td>Desde 67.51kg hasta 75.00kg</td>
        </tr>
        <tr>
          <td>82.5kg</td>
          <td>Desde 75.01kg hasta 82.50kg</td>
        </tr>
        <tr>
          <td>90kg</td>
          <td>Desde 82.51kg hasta 90.00kg</td>
        </tr>
        <tr>
          <td>100kg</td>
          <td>Desde 90.01kg hasta 100.00kg</td>
        </tr>
        <tr>
          <td>110kg</td>
          <td>Desde 100.01kg hasta 110.00kg</td>
        </tr>
        <tr>
          <td>125kg</td>
          <td>Desde 110.01kg hasta 125.00kg</td>
        </tr>
        <tr>
          <td>140kg</td>
          <td>Desde 125.01kg hasta 140.00kg</td>
        </tr>
        <tr>
          <td>140+kg</td>
          <td>Desde 140.01kg </td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default TableCategoryWeigthMale;