import {Typography,Row,Col,Button} from 'antd'
import React,{useState,useEffect} from 'react'

const {Title}= Typography

function CommentPage() {
    const [comment, setComment] = useState()
    
    useEffect(() => {
        
    }, [])

    return (
        <div style={{margin:'8rem',display:'flex', alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
            <div>
                <Title level={2}>제목</Title>
            </div>
            <div style={{marginTop:'1rem'}}>
                <p>설명</p>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Button style={{backgroundColor:'grey', color:'white', width:'6rem', height:'2.5rem'}}>저장</Button>
            </div>
        </div>
    )    
}

export default CommentPage
