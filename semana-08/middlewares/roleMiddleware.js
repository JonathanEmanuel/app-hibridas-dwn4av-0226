const roleMiddlware = (req, res, next) => {
    const role = req.user.role;
    if( role !== 'admin'){ // !=
        return res.status(403).json({
            message: 'Acceso denegado2'
        })
    }

    next();

}

export default roleMiddlware