function Alert( props ){
    const { msg, type, number }  = props;
    return <h4 className='alert'>{ msg } {  number } </h4>
}

export default Alert