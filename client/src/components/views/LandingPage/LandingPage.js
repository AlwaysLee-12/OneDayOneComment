import React from 'react'
import {Typography,Button} from 'antd'

const {Title}= Typography

function LandingPage() {
    return (
        <div style={{width:'90%', margin:'7rem auto', display:'flex', alignItems:'center', flexDirection:'column',justifyContent:'space Between'}}>
            <Title level={2} style={{color:'grey', fontWeight:'bolder'}}>1 Day 1 Comment</Title>      
            <br />
            <div>
                <a href={`/comment/${0}`}><Button style={{backgroundColor:'grey', color:'white', width:'15rem', height:'2.5rem'}}>명언</Button></a>
            </div>
            <div>
                <a href={`/comment/${1}`}><Button style={{backgroundColor:'grey', color:'white', width:'15rem', height:'2.5rem', margin:'0.5rem'}}>바이블</Button></a>
            </div>
            <div>
                <a href={`/comment/${2}`}><Button style={{backgroundColor:'grey', color:'white', width:'15rem', height:'2.5rem'}}>영문장</Button></a>
            </div>
            <div>
                <a href={`/comment/${3}`}><Button style={{backgroundColor:'grey', color:'white', width:'15rem', height:'2.5rem',margin:'0.5rem'}}>사자성어</Button></a>
            </div>
            <div>
                <a href={`/addComment`}><Button style={{backgroundColor:'grey', color:'white', width:'15rem', height:'2.5rem'}}>코멘트 추가</Button></a>
            </div> 
        </div>
    )
}

export default LandingPage
