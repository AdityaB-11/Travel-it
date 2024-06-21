import jwt from 'jsonwebtoken';

const validateToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  console.log(token);

  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized Please login' });
  }

  try {
    const mySecretKey = 'test.login.ok';
    const token1 ='test.login.ok';
    
    const decoded = jwt.verify(token1, mySecretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, message: 'Unauthorized Please login'+error });
  }
};

export default validateToken; 