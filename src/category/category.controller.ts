import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('/create')
  create(@Body() category: CreateCategoryDto) {
    return this.categoryService.createCategory(category);
  }
}
