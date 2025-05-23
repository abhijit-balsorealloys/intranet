

const LoadingData: React.FC<{ height?: number }> = ({ height = 300 }) => {
    return <div className="w-100 d-flex justify-content-center align-items-center">
        <img style={{ maxHeight: height + 'px' }} src={"/images/loading-data.gif"} className="img-fluid" alt="Loading..." />
    </div>
}

export default LoadingData