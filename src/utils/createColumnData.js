

const createColumnData = (items=[], columns=[]) => {

    

    return columns.map( column => {
        
        let data = items.map( item => {
            return item[column[1]];
        } )

        return {
            title : column[0],
            data
        }

    } );


}



export default createColumnData