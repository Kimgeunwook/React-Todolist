import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width : 512px;
    height : 768px;

    /* // 초록색 플러스 버튼을 최하단에 위치시킬때 사용 */
    background : white;
    border-radius : 16px;
    box-shadow : 0 0 8px rgba(0, 0, 0, 0.04);

    margin : 0 auto;
    margin-top : 100px;
    margin-bottom : 32px;
    position : relative;

    display : flex;
    flex-direction : column;
`;

function TodoTemplate({children})
{
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;