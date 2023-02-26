import React from 'react'
import { Col, Table } from 'react-bootstrap'
import IDataList from '../../models/IDataList';
import ShowListTotal from './ShowListTotal';

type Props = {
  data: IDataList[],
  totalSpend: number,
  rahulsSpend: number,
  rameshsSpend : number,
}

const ShowListMain = ({ data, totalSpend,rahulsSpend,rameshsSpend }: Props) => {
  return (
    <>
      <Col md={7}>
        <Table striped bordered hover className='boxShadow'>
          <thead className='position-sticky bg-white table-dark' style={{ top: 0 }}>
            <tr style={{ borderTop: "1px solid black" }}>
              <th>#</th>
              <th>Date</th>
              <th>Product</th>
              <th>Price</th>
              <th>Payee</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(data => (

                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.setDate}</td>
                  <td>{data.product}</td>
                  <td>{data.price}</td>
                  <td>{data.payeeName}</td>
                </tr>
              ))
            }

          </tbody>
        </Table>
      </Col>
      <Col>
        <ShowListTotal totalspend={totalSpend} rahulSpend={rahulsSpend} rameshSpend={rameshsSpend}></ShowListTotal>
      </Col>
      </>
  )
}

export default ShowListMain