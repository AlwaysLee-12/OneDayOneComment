import React,{useEffect,useState} from 'react'
import Paginator from 'react-hooks-paginator';

function Pagination(props) {
    const pageLimit = 5;
    
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [CurrentData, setCurrentData] = useState([]);

    useEffect(() => {
        setCurrentData(props.Comments.slice(offset, offset + pageLimit));
        console.log(CurrentData)
    }, [offset, props.Comments]);

    return (
        <div>
            <table border="2">
                <th>Title</th><th>Description</th><th>Register Date</th>
                {CurrentData.map(data => (
                <tr><td>{data.title}</td><td>{data.description}</td><td>{data.registerDate}</td></tr>
                ))}
            </table>
            <Paginator
                totalRecords={props.Comments.length}
                pageLimit={pageLimit}
                pageNeighbours={1}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default Pagination
