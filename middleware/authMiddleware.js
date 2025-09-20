import jwt from 'jsonwebtoken'

const JWT = process.env.JWT_SECRET

export const authMiddleware = (req,res,next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify(token,JWT, (err,decoded)=> {
        if(err) return res.status(403).json({msg: "Token Invalid"});
        req.user = decoded
        next();
    })
}


export const roleMiddleware = (role) => {
    return (req,res,next) => {
        if(!req.user || role.includes(req.user.role)) {
            return res.status(403).json({message: "Lo Bukan Admin"})
        }
        next();
    }
}