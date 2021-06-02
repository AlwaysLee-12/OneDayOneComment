import React,{useState} from 'react'
import {Typography,Button,Form,message,Input,Icon} from 'antd'
import axios from 'axios'

const {TextArea}=Input
const {Title}=Typography
const CategoryOptions=[
    {value:0, label:"명언"},
    {value:1, label:"바이블"},
    {value:2, label:"영문장"},
    {value:3, label:"사자성어"}
]
const today=new Date()

function AddCommentPage(props) {
    const recordDate=today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate() 

    const [Category, setCategory] = useState("명언")
    const [CommentTitle, setCommentTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [RecordDate, setRecordDate] = useState(recordDate)

    const onCategoryChange=(e)=>{
        setCategory(e.currentTarget.value)
    }
    const onCommentTitleChange=(e)=>{
        setCommentTitle(e.currentTarget.value)
    }
    const onDescriptionChange=(e)=>{
        setDescription(e.currentTarget.value)
    }
    const onRecordDateChange=(e)=>{
        setRecordDate(e.currentTarget.value)
    }
    
    const onSubmit=(e)=>{
        e.preventDefault(); //원래 하려고 했던 것들 방지함으로써 현재 하려는 것 수행
        const variables={
            category:Category,
            title:CommentTitle,
            description:Description,
            registerDate:RecordDate
        }
        axios.post('api/video/uploadComment',variables)
    }

    return (
        <div style={{maxWidth:'700px', margin:'2rem auto'}}>
            <div style={{textAlign:'center', marginBottom:'2rem'}}>
                <Title level={2} style={{color:'grey', fontWeight:'bolder'}}>Add Comment</Title>
            </div>
            <Form onSubmit={onSubmit}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                </div>

                <br/>
                <br/>

                <select onChange={onCategoryChange}>
                    {CategoryOptions.map((item,index)=>(
                        <option key={index} value={item.value}>{item.label}</option>
                    ))} 
                </select>

                <br/>
                <br/>

                <label>Comment Title</label>
                <Input
                    onChange={onCommentTitleChange}
                    value={CommentTitle}
                />
                <br/>
                <br/>
                <label>Description</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={Description}
                />
                <br/>
                <br/>

                <label>Register Date</label>
                <TextArea
                    onChange={onRecordDateChange}
                    value={RecordDate}
                />
                <br/>
                <br/>

                <Button type="primary" size="large" onClick={onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default AddCommentPage
