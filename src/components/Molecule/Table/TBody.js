import React, { useEffect, useState } from "react";
import TableBodyWrapper from "../../Atom/Table/TableBodyWrapper";
import TableRowWrapper from "../../Atom/Table/TableRowWrapper";
import TCell from "../../Atom/Table/TCell";

const TBody = ({ items, rows, render = null, children }) => {

    const [table, setTable] = useState([]);

    useEffect(() => {
        const addRows = () => {
            if (items) {
                let contentRow = [];
                for (let i = 0; i < rows; i++) {
                    contentRow.push(
                        <TableRowWrapper key={i}>
                            {
                                items ?
                                    items.map((item, index) => {
                                        return (

                                            item.title !== "id" ?

                                                <TCell key={index}>
                                                    {item.data[i]}
                                                </TCell>
                                                :
                                                null
                                        )
                                    })
                                    :
                                    null
                            }
                            {
                                render ?
                                    <TCell>
                                        {
                                            items ?
                                                items.map((item, index) => {
                                                    return (
                                                        item.title === "id" ?
                                                            render(item.data[i])

                                                            :
                                                            null
                                                    )
                                                })
                                                :
                                                null
                                        }
                                    </TCell>
                                    :
                                    null
                            }

                        </TableRowWrapper>
                    )
                }
                return contentRow;
            }
        }

        setTable(addRows())

    }, [items, rows, render]);

    return (
        <TableBodyWrapper>
            {
                table
            }
        </TableBodyWrapper>
    );
}

export default TBody;