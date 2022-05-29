import styled from "styled-components";

const mainColor = `white`

const TableBox = styled.table`
  table {
    font-size: 12px;
    background-color: blueviolet;
    thead {
      font-size: 16px;
      color: ${mainColor};
    }
    tbody {
      font-size: 14px;
      color: tomato;
    }
  }
`;

function Table() {
    return (
        <TableBox >
            <table>
                <thead>
                    <tr>
                        <th>제목</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>헤헤</td>
                    </tr>
                </tbody>
            </table>
        </TableBox>
    );
}



export default Table;