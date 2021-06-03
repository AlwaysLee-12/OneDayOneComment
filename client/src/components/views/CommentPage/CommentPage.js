import {Typography,Row,Col,Button} from 'antd'
import Axios from 'axios'
import React,{useState,useEffect} from 'react'

const {Title}= Typography

function CommentPage(props) {
    const commentId= props.match.params.id

    const [CommentTitle, setCommentTitle] = useState("")
    const [Description, setDescription]= useState("")

    const variable={commentId: commentId}

    useEffect(() => {
        Axios.post("/api/comment/getComment",variable)
            .then(response=>{
                if(response.data.success){
                    setCommentTitle(response.data.comment.title)
                    setDescription(response.data.comment.description)
                }else{
                    alert('Fail To Get Comment')
                }
            })
    }, [])

    return (
        <div style={{margin:'8rem',display:'flex', alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
            <div>
                <Title level={3}>{CommentTitle}</Title>
            </div>
            <div style={{marginTop:'1rem'}}>
                <p>{Description}</p>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Button style={{backgroundColor:'grey', color:'white', width:'5rem', height:'2.5rem'}} onClick>저장</Button>
            </div>
        </div>
    )    
}

export default CommentPage
