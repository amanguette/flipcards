import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async findAll() {
    return prisma.user.findMany();
  }

  async create(data: { email: string; name?: string }) {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    return prisma.user.create({
      data,
    });
  }
}
