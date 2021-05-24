import React from 'react'
import {Typography,Row,Col,Button} from 'antd'

const {Title}= Typography

function LandingPage() {
    return (
        <div style={{width:'85%', margin:'6rem auto', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
            <Title level={2}>1 Day 1 Comment</Title>      
            <br />
            <br />
            <Row style={{width:'30rem', marginLeft:'16.5rem', marginBottom:'1rem'}}>
                <Col lg={6} md={8} xs={24}>
                    <a href={`/comment/${1}`}><Button style={{backgroundColor:'grey', color:'white', width:'6rem', height:'2.5rem'}}>명언</Button></a>
                </Col>
                <Col lg={6} md={8} xs={24}>
                <a href={`/comment/${2}`}><Button style={{backgroundColor:'grey', color:'white', width:'6rem', height:'2.5rem'}}>바이블</Button></a>
                </Col>
            </Row>    
            <br />
            <Row style={{width:'30rem', marginLeft:'16.5rem'}}>
                <Col lg={6} md={8} xs={24}>
                <a href={`/comment/${3}`}><Button style={{backgroundColor:'grey', color:'white', width:'6rem', height:'2.5rem'}}>영문장</Button></a>
                </Col>
                <Col lg={6} md={8} xs={24}>
                <a href={`/comment/${4}`}><Button style={{backgroundColor:'grey', color:'white', width:'6rem', height:'2.5rem'}}>사자성어</Button></a>
                </Col>
            </Row>
        </div>
    )
}

export default LandingPage
