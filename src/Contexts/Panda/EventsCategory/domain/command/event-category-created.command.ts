import { Command } from '../../../../Shared/domain/command';

export class EventCategoryCreateCommand extends Command {
  constructor(
    public readonly id: string,
    public name: string,
    public description: string
  ) {
    super();
  }
}
