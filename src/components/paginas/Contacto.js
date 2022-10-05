function Contacto({greeting}) {
    
    const styles = {
        backgroundColor: '#D926A9',
        color: 'white'
    }

    return (
        <div>
            <p style={styles}>{greeting}</p>
        </div>
    );
}

export default Contacto;