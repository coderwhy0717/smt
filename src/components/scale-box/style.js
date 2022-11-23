import styled from 'styled-components'

export const ScaleBoxWrapper = styled.div`
    
    position: absolute;
    transform: scale(var(--scale)) translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    transform-origin: 0 0;
    left: 50%;
    top: 50%;
    transition: 0.3s;
    z-index: 999;
`