import * as Yup from 'yup';
import User from '../models/User';

class UserControllers {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Falha na validação dos dados fornecidos' });
    }
    const emailExist = await User.findOne({ where: { email: req.body.email } });
    if (emailExist) {
      return res
        .status(400)
        .json({ error: 'Email já existe na base de dados' });
    }
    const { id, name, email } = await User.create(req.body);
    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserControllers();
