import {Typography,Row,Col,Button, message} from 'antd'
import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
const {Title}= Typography

function CommentPage(props) {
    const commentId= props.match.params.id
    const user=useSelector(state=>state.user)
    const [CommentTitle, setCommentTitle] = useState("")
    const [Description, setDescription]= useState("")

    const variable={commentId: commentId}

    useEffect(() => {
        Axios.post("/api/comment/getComment",variable)
            .then(response=>{
                console.log(response.data)
                if(response.data.success){
                    setCommentTitle(response.data.comment.title)
                    setDescription(response.data.comment.description)     
                }else{
                    alert('Fail To Get Comment')
                    props.history.push('/')
                }
            })
    }, [])

    const onSubmit=()=>{
        const date=new Date()
        const today=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()
        const variables={
            userInfo:user.userData._id,
            category:commentId,
            title:CommentTitle,
            description:Description,
            registerDate: today
        }

        Axios.post("/api/comment/saveComment",variables)
            .then(response=>{
                if(response.data.success){
                    message.success("Success to save the Comment")
                }else{
                    alert("Fail to save Comment!")
                }
            })
    }

    return (
        <div style={{margin:'8rem',display:'flex', alignItems:'center',justifyContent:'center', flexDirection:'column'}}>
            <div>
                <Title level={3}>{CommentTitle}</Title>
            </div>
            <div style={{marginTop:'1rem'}}>
                <p>{Description}</p>
            </div>
            <div style={{marginTop:'1rem'}}>
                <Button style={{backgroundColor:'grey', color:'white', width:'5rem', height:'2.5rem'}} onClick={onSubmit}>저장</Button>
            </div>
        </div>
    )    
}

export default CommentPage
