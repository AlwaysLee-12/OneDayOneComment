import React from 'react'

function MyRecordedPage() {
    return (
        <div style={{margin:'13rem auto', display:'flex', alignItems:'center', flexDirection:'column',justifyContent:'space Between'}}>
            <table border="2">
                <th>Comment</th><th>Description</th><th>Record Date</th>
                <tr>
                    <td>코멘트 자리</td>
                    <td>설명 자리</td>
                    <td>등록일 자리</td>
                </tr>
            </table>
        </div>
    )
}

export default MyRecordedPage
