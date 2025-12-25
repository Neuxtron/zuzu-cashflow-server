import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import Record from '../_types/record';

@Injectable()
export class RecordsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.records.findMany()
  }

  findOne(id: string) {
    return this.prisma.records.findUnique({
      where: { id }
    })
  }

  create(data: Record) {
    return this.prisma.records.create({ data })
  }

  async update(data: Record, id: string) {
    await this.prisma.records.update({ data, where: { id } })
    return this.prisma.records.findUnique({ where: { id } })
  }

  async delete(id: string) {
    const record = await this.prisma.records.findUnique({ where: { id } })
    await this.prisma.records.delete({ where: { id } })
    return record
  }
}
