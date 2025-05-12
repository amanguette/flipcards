import { Body, ConflictException, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Récupérer tous les utilisateurs
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  // Créer un utilisateur
  @Post()
  async create(@Body() body: { email: string; name?: string }) {
    try {
      return await this.usersService.create(body);
    } catch (error) {
      // Si l'erreur est un "email déjà pris", renvoyer une réponse explicite
      if (error instanceof ConflictException) {
        throw error;
      }
      // Gérer d'autres erreurs si nécessaire
      throw error;
    }
  }
}
