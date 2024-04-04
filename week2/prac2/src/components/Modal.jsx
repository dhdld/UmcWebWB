export default function Modal({isOpen, closeModal}) {

    return (
        <div style={{display: isOpen ? "block" : "none"}}>  
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <div style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '3px',
            width: '320px',
            }}>
            <h2>안녕하세요</h2>
            <p>모달 내용은 어쩌고저쩌고...</p>
            <div style={{textAlign:'end'}}>
            <button onClick={closeModal} >닫기</button>
            </div>
            </div>
        </div>
        </div>
    )
}