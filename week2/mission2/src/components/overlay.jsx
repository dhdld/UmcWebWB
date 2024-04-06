export default function Overlay({ title, overview }) {
    return (
        <div className="overlay">
            <div style={{
                fontWeight: 'bold',
                margin: '20px',
                marginBottom: '10px'
            }}>{title}</div>
            <div style={{margin:'20px'}}>
            {overview && overview.length > 100 ? `${overview.substring(0, 100)}...` : overview}
            </div>
        </div>
    )
}