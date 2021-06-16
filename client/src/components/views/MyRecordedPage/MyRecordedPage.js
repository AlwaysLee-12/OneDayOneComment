import React,{useState,useEffect} from 'react'
import Paginator from 'react-hooks-paginator';
import Axios from 'axios'
import {Avatar,Col,Meta ,Typography, Row} from 'antd'

function MyRecordedPage() {
    const pageLimit = 10;
    
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [currentData, setCurrentData] = useState([]);
    const [Comments, setComments] = useState([])

    useEffect(() => {
        const variables={userInfo:localStorage.getItem('userId')}
        Axios.post('/api/recorded/getRecorded',variables)
            .then(response=>{
                if(response.data.success){
                    setComments(response.data.comments)

                }else{
                    alert('Fail To Get Recorded')
                }
            })
    }, [])
     
    useEffect(() => {
        setCurrentData(data.slice(offset, offset + pageLimit));
    }, [offset, data]);

    const renderComments=Comments.map((comment,index)=>{
        return  <tr>
                    <td>{comment.title}</td>
                    <td>{comment.description}</td>
                    <td>{comment.registerDate}</td>
                </tr>
    })

    return (
        <div style={{margin:'13rem auto', display:'flex', alignItems:'center', flexDirection:'column'}}>
            <table border="2">
                <th>Comment</th><th>Description</th><th>Record Date</th>
                {renderComments}
            </table>
            
            <ul>
                {currentData.map(data => (
                <li>{data}</li>
                ))}
            </ul>
            <Paginator
                totalRecords={10}
                pageLimit={4}
                pageNeighbours={1}
                setOffset={setOffset}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}

export default MyRecordedPage
