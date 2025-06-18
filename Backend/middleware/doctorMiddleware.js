const doctorMiddleware = (req, res, next) => {

    if (req.user?.role !== "doctor") {
        return res.status(403).json({ message: "Access denied. Doctors only." });
    }

    next();
};



module.exports = doctorMiddleware;
