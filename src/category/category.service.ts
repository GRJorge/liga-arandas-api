import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/createCategory.dto';
import { Category } from './category.schema';
import { GetCategoryDto } from './dto/getCategory.dto';

@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category.name) private readonly categoryModel: Model<Category>) {}

  async createCategory(category: CreateCategoryDto): Promise<Category> {
    return await this.categoryModel.create(category);
  }

  async get(categoryQuerys: GetCategoryDto): Promise<Category[]> {
    return await this.categoryModel.find(categoryQuerys).populate('league');
  }
}
