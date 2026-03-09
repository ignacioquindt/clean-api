import { Request, Response, NextFunction } from 'express';

export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const apiKey = req.header('x-api-key');
    const secretKey = process.env.API_KEY;

    if (!apiKey || apiKey !== secretKey) {
        return res.status(401).json({
            error: 'Unauthorized',
            message: 'A valid API Key is required in the x-api-key header.'
        });
    }

    next();
};
