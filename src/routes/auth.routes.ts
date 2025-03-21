import { FastifyInstance } from 'fastify'
import { register, login, logout } from '../controllers/auth.controller'

export default async function authRoutes(fastify: FastifyInstance) {
  fastify.post('/api/auth/register', register)
  fastify.post('/api/auth/login', login)
  fastify.post('/api/auth/logout', logout)
} 