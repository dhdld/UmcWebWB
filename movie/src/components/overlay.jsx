import styled from 'styled-components';

export default function Overlay({ title, overview }) {
    const Overview = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: 'flex';
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.8em;
    opacity: 0;
    color: white;
    transition: 0.3s ease;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    `
    return (
        <Overview>
            <div style={{
                fontWeight: 'bold',
                margin: '20px',
                marginBottom: '10px'
            }}>{title}</div>
            <div style={{margin:'20px'}}>
            {overview && overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}
            </div>
        </Overview>
    )
}