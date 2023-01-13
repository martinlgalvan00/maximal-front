import Table from 'react-bootstrap/Table';

function TableCategoryAge() {
  return (
    <Table responsive="sm" striped bordered hover>
      <thead className='text-center'>
        <tr>
          <th className='w-25'>Categoría</th>
          <th className='w-75'></th>
        </tr>
      </thead>
      <tbody className='text-center'>
        <tr>
          <td>Teen 13-14</td>
          <td>Desde el día que alcanza los 13 años de edad hasta el último día con 14
            años de edad.</td>
        </tr>
        <tr>
          <td>Teen 15-17</td>
          <td>Desde el día que alcanza los 15 años de edad hasta el último día con 17
            años de edad.</td>
        </tr>
        <tr>
          <td>Teen 18-19</td>
          <td>Desde el día que alcanza los 18 años de edad hasta el último día con 19
            años de edad.</td>
        </tr>
        <tr>
          <td>Junior</td>
          <td>Desde el día que alcanza los 20 años de edad hasta el último día con 23
            años de edad.</td>
        </tr>
        <tr>
          <td>Open <b>(**)</b></td>
          <td>Desde el día que alcanza los 24 años de edad hasta el último día con 39 años de
            edad.</td>
        </tr>
        <tr>
          <td>Master 1</td>
          <td>Desde el día que alcanza los 40 años de edad hasta el último día con 49 años
            de edad.</td>
        </tr>
        <tr>
          <td>Master 2</td>
          <td>Desde el día que alcanza los 50 años de edad hasta el último día con 59 años
            de edad.</td>
        </tr>
        <tr>
          <td>Master 3</td>
          <td>Desde el día que alcanza los 60 años de edad hasta el último día con 69 años
            de edad.</td>
        </tr>
        <tr>
          <td>Master 4</td>
          <td>Desde el día que alcanza los 70 años de edad hasta el último día con 79 años
            de edad.</td>
        </tr>
        <tr>
          <td>Master 5</td>
          <td>Desde el día que alcanza los 80 años de edad hasta el último día con 89 años
            de edad.</td>
        </tr>
        <tr>
          <td>Master 6</td>
          <td>Desde el día que alcanza los 90 años de edad hasta el último día con 99 años
            de edad.</td>
        </tr>
        
      </tbody>
      <tfoot>
        <tr className='text-center bg-secondary text-light'>
          <td colSpan="2">
            <b>(**)</b><i> Cualquier atleta de cualquier edad puede participar en esta categoría</i>
          </td>
        </tr>
      </tfoot>
    </Table>
  );
}

export default TableCategoryAge;