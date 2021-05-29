import React from "react";
import TableHeadWrapper from "../../Atom/Table/TableHeadWrapper";
import TableRowWrapper from "../../Atom/Table/TableRowWrapper";
import THeaderCell from "../../Atom/Table/THeaderCell";


const THeader = ({ items, render=null ,...props }) => {
    return (
        <TableHeadWrapper>
            <TableRowWrapper>
                {items ?
                    items.map((item, index) => {
                        return (
                            item.title !== "id" ?
                                <THeaderCell key={index}>
                                    {item.title}
                                </THeaderCell>
                                :
                                null
                        )
                    })
                    :
                    null
                }

                {
                    render ? <THeaderCell></THeaderCell> : null
                }

               
            </TableRowWrapper>
        </TableHeadWrapper>
    );
}

export default THeader;