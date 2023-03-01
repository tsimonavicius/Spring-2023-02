const PropState = (props) => (
    <div style={{margin: '1rem 0'}}>
        <h3 style={{fontFamily: 'monospace'}}/>
        <pre
            style={{
                background: '#ffffff',
                fontSize: '1rem',
                padding: '.5rem',
            }}
        >
                    <strong>props</strong> ={' '}
            {JSON.stringify(props, null, 2)}
                    </pre>
    </div>
)

export default PropState