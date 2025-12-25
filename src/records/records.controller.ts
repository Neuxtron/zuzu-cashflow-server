import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { RecordsService } from './records.service';
import type Record from '../_types/record';

@Controller('records')
export class RecordsController {
  constructor(private readonly service: RecordsService) {}

  @Get()
  async getRecords() {
    const records = await this.service.findAll()
    return {
      status: true,
      message: "Successfully got records",
      data: records
    }
  }

  @Get(":id")
  async getSingleRecord(@Param("id") id: string) {
    const record = await this.service.findOne(id)
    return {
      status: true,
      message: "Successfully got record",
      data: record
    }
  }

  @Post("create")
  @HttpCode(201)
  async createRecord(@Body() body: Record) {
    const record = await this.service.create(body)
    return {
      status: true,
      message: "Successfully created record",
      data: record
    }
  }

  @Put("update/:id")
  async updateRecord(@Body() body: Record, @Param("id") id: string) {
    const record = await this.service.update(body, id)
    return {
      status: true,
      message: "Successfully updated record",
      data: record
    }
  }

  @Delete("delete/:id")
  async deleteRecord(@Param("id") id: string) {
    const record = await this.service.delete(id)
    return {
      status: true,
      message: "Successfully deleted record",
      data: record
    }
  }
}
