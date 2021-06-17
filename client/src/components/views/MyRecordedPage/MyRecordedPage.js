import React,{useState,useEffect} from 'react'
import Paginator from 'react-hooks-paginator';
import Axios from 'axios'
import {Avatar,Col,Meta ,Typography, Row} from 'antd'
import Pagination from './Section/Pagination';

function MyRecordedPage() {

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
     
    return (
        <div style={{margin:'13rem auto', display:'flex', alignItems:'center', flexDirection:'column'}}>       
            <Pagination Comments={Comments}/>
        </div>
    )
}

export default MyRecordedPage
