class UserController {
  async index(request, response) {
    const { query: { name } } = request;
    return response.status(200).json({
      message: `Hello ${name || 'user'}`,
    });
  }
}

export default new UserController();
