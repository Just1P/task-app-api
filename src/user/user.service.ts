import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() : Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository
    .createQueryBuilder('user')
    .where('user.id = :id', {id})
      //exclude password
    .addSelect('user.password', 'password')
    .getOne();

    if(!user) {
      throw new NotFoundException('User not found')
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
  
    // await this.userRepository.update(id, updateUserDto);
  
    // return await this.findOne(id);
    const user = await this.findOne(id);

    const updateUser= {
      ...user, 
      ...updateUserDto,
    }

    await this.userRepository.update(id, updateUserDto);

    return updateUser;
  }

  async remove(id: number): Promise<any> {
    await this.findOne(id);

    return this.userRepository.softDelete(id);
  }
  
}
