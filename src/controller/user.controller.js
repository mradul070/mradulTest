import { status } from '../constants/status';
import { changePasswordService, registerUserService , updateUserService} from '../service/user.service';

export const registerUserController = async (req, res) => {
    let user = await registerUserService(req.body);
    res.status(status.CREATED).send(user);
};

export const userProfileController = async (req,res) => {
    const user = req.user;
    res.status(status.OK).send(user);
}

export const updateUserController = async (req, res) => {
    const user = req.user;
    await updateUserService(user.id, req.body)
    res.status(status.OK).send({message: 'User updated successfully...'})
}

export const changePasswordController = async (req, res) => {
    const user = req.user;
    await changePasswordService(user.id, req.body)
    res.status(status.OK).send({message: 'Password updated successfully...'})

}
