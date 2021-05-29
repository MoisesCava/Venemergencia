import React from "react";
import TBody from "../../Molecule/Table/TBody";
import TableContainerWrapper from "../../Atom/Table/TableContainerWrapper";
import CenterContent from "../../Atom/Layout/CenterContent"
import THeader from "../../Molecule/Table/THeader";
import TableWrapper from "../../Atom/Table/TableWrapper";


const CommonTable = ({ items = [], render}) => {

    const rows = items[0]?.data?.length;

    return (
        <CenterContent>
            
                <TableContainerWrapper>
                    <TableWrapper>
                        <THeader items={items} />
                        <TBody items={items} rows={rows} render={render} />
                    </TableWrapper>
                </TableContainerWrapper>
            
        </CenterContent>
    );
}

export default CommonTable;