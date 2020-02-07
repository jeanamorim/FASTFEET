import Recipients from '../models/Recipients';

class RecipientsControllers {
  async store(req, res) {
    const {
      id,
      name,
      rua,
      número,
      complemento,
      estado,
      cidade,
      cep,
    } = await Recipients.create(req.body);
    return res.json({
      id,
      name,
      rua,
      número,
      complemento,
      estado,
      cidade,
      cep,
    });
  }
}
export default new RecipientsControllers();
