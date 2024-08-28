import type { Request, Response, NextFunction } from "express";

export function logger(req: Request, res: Response, next: NextFunction) {
	res.on("finish", () => {
		console.log(
			new Date().toLocaleString("IN"),
			req.method,
			decodeURI(req.url),
			res.statusCode,
			res.statusMessage,
		);
	});
	next();
}
