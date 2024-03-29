import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExpenceService } from './expence.service';
import { Expence } from './entities/expence.entity';
import { CreateExpenceInput } from './dto/create-expence.input';
import { UpdateExpenceInput } from './dto/update-expence.input';

@Resolver(() => Expence)
export class ExpenceResolver {
  constructor(private readonly expenceService: ExpenceService) {}

  @Mutation(() => Expence)
  createExpence(@Args('createExpenceInput') createExpenceInput: CreateExpenceInput) {
    return this.expenceService.create(createExpenceInput);
  }

  @Query(() => [Expence], { name: 'expence' })
  findAll() {
    return this.expenceService.findAll();
  }

  @Query(() => Expence, { name: 'expence' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.expenceService.findOne(id);
  }

  @Mutation(() => Expence)
  updateExpence(@Args('updateExpenceInput') updateExpenceInput: UpdateExpenceInput) {
    return this.expenceService.update(updateExpenceInput.id, updateExpenceInput);
  }

  @Mutation(() => Expence)
  removeExpence(@Args('id', { type: () => Int }) id: number) {
    return this.expenceService.remove(id);
  }
}
