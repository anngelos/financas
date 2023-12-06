const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createUserToken = require('../helpers/create-user-token');
const getToken = require('../helpers/get-token');
const getUserByToken = require('../helpers/get-user-by-token');

module.exports = class UserController {

  static async register(req, res) {
    const { name, nickname, password, confirmpassword, image } = req.body

    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório." })
      return
    }

    if (!nickname) {
      res.status(422).json({ message: "O apelido é obrigatório." })
      return
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatório." })
      return
    }

    if (!confirmpassword) {
      res.status(422).json({ message: "A confirmação de senha é obrigatória." })
      return
    }

    if (password !== confirmpassword) {
      res.status(422).json({ message: "A senha e a confirmação de senha precisam ser iguais." })
      return
    }

    const userExists = await User.findOne({ nickname: nickname });

    if (userExists) {
      res.status(422).json({ message: "Apelido de usuário já existente." })
      return
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      nickname,
      password: passwordHash
    })

    try {
      const newUser = await user.save();
      await createUserToken(newUser, req, res);
    } catch(error) {
      res.status(500).json({ message: error })
    }
  }

  static async login(req, res) {
    const { nickname, password } = req.body

    if (!nickname) {
      res.status(422).json({ message: "O apelido é obrigatório." })
      return
    }

    if (!password) {
      res.status(422).json({ message: "A senha é obrigatória." })
      return
    }

    const user = await User.findOne({ nickname: nickname });

    if (!user) {
      res.status(422).json({ message: "Não há usuário cadastrado com este apelido." })
      return
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      res.status(422).json({ message: "Senha inválida." })
      return
    }

    await createUserToken(user, req, res)
  }

  static async checkUser(req, res) {
    let currentUser

    if (req.headers.authorization) {
      const token = getToken(req)
      const decoded = jwt.verify(token, "degatembritt")

      currentUser = await User.findById(decoded.id)
      currentUser.password = undefined
    } else {
      currentUser = null
    }

    res.status(200).send(currentUser)
  }

  static async getUserById(req, res) {
    const id = req.params.id
    const user = await User.findById(id).select("-password")

    if (!user) {
      res.status(422).json({ message: "Usuário não encontrado." })
      return
    }

    res.status(200).json({ user })
  }

  static async editUser(req, res) {
    const id = req.params.id

    const token = getToken(req)
    const user = await getUserByToken(token, res)
    
    const { name, nickname, password, confirmpassword } = req.body

    if (req.file) {
      user.image = req.file.filename
    }
    
    if (!name) {
      res.status(422).json({ message: "O nome é obrigatório." })
      return
    }
    
    user.name = name

    if (!nickname) {
      res.status(422).json({ message: "O apelido é obrigatório." })
      return
    }

    const userExists = await User.findOne({ nickname: nickname })

    if (user.nickname !== nickname && userExists) {
      res.status(422).json({ message: "Por favor, utilize outro apelido." })
      return
    }

    user.nickname = nickname

    if (password !== confirmpassword) {
      res.status(422).json({ message: "As senhas não conferem." })
      return
    } else if (password === confirmpassword && password != null) {
      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);

      user.password = passwordHash
    }

    try {
      
      await User.findOneAndUpdate(
        { _id: user._id },
        { $set: user },
        { new: true }
      )

      res.status(200).json({ message: "Usuário atualizado com sucesso." })

    } catch(error) {
      res.status(500).json({ message: error })
      return
    }
  }

}