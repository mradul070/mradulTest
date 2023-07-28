import { use } from 'passport';
import { status } from '../constants/status';
import { registerUserService } from '../service/user.service';

export const registerUserController = async (req, res) => {
    let user = await registerUserService(req.body);
    res.status(status.CREATED).send(user);
};
