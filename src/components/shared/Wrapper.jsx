
const Wrapper = (props) => {
    const { children, className } = props
    return (
        <div className={`mx-auto w-full h-full max-w-[1400px] p-5', ${className}`}>{children}</div>
    )
}

export default Wrapper