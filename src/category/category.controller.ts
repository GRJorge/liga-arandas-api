import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { CategoryService } from './category.service';
import { GetCategoryDto } from './dto/getCategory.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  create(@Body() category: CreateCategoryDto) {
    return this.categoryService.createCategory(category);
  }
  @Get('/get')
  get(@Query() categoryQuerys: GetCategoryDto) {
    return this.categoryService.get(categoryQuerys);
  }
}
