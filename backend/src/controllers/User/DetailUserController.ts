import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response){

        const user_id = req.user_id;

        console.log("ID do user>", user_id)
        
        const detalUserService = new DetailUserService;

        const user = await detalUserService.execute(user_id);

        return res.json(user);
    }
}

export { DetailUserController }