interface LoaderProps{
    show: boolean;
}


export const Loader: React.FC<LoaderProps> = ({ show }) => {

    if(!show){
        return <React.Fragment></ React.Fragment>
    }
    
    return(
        <div id="loader" style={{
            background: 'rgba(255, 255,255,0,5)',
            width: '100%',
            height: '100%',
            zIndex: 9999,
            position: 'absolute',
            left: '25%',
            top: '20%'
        }}>
        
        <div style={{
            position: 'absolute',
            left: '25%',
            top: '20%'
        }}>
            <div className="lds-spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

    )
}