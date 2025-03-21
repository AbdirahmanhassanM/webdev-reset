import { FastifyRequest, FastifyReply } from 'fastify'
import bcrypt from 'bcrypt'
import { User } from '../models/user'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { username, email, password } = request.body as any

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return reply.code(400).send({ message: 'User already exists' })
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create new user
    const user = new User({
      username,
      email,
      password: hashedPassword,
    })

    await user.save()

    // Generate JWT token
    const token = await reply.jwtSign({ userId: user._id })

    return reply.code(201).send({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    })
  } catch (error) {
    console.error('Registration error:', error)
    return reply.code(500).send({ message: 'Internal server error' })
  }
}

export async function login(request: FastifyRequest, reply: FastifyReply) {
  try {
    const { email, password } = request.body as any

    // Find user
    const user = await User.findOne({ email })
    if (!user) {
      return reply.code(401).send({ message: 'Invalid credentials' })
    }

    // Verify password
    const validPassword = await bcrypt.compare(password, user.password)
    if (!validPassword) {
      return reply.code(401).send({ message: 'Invalid credentials' })
    }

    // Generate JWT token
    const token = await reply.jwtSign({ userId: user._id })

    return reply.send({
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    })
  } catch (error) {
    console.error('Login error:', error)
    return reply.code(500).send({ message: 'Internal server error' })
  }
}

export async function logout(request: FastifyRequest, reply: FastifyReply) {
  try {
    // In a real application, you might want to invalidate the token
    // For now, we'll just send a success response
    return reply.send({ message: 'Logged out successfully' })
  } catch (error) {
    console.error('Logout error:', error)
    return reply.code(500).send({ message: 'Internal server error' })
  }
} 