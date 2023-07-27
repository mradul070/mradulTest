import { registerUserService } from '../service/user.service';

export const registerUserController = async (req, res) => {
    const user = await registerUserService(req.body);
    res.status(200).send({ user, user });
};
