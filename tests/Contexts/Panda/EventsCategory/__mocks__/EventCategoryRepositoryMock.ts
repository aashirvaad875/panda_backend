import { EventCategoryRepository } from '../../../../../src/Contexts/Panda/EventsCategory/domain/repositories/event-category.repository';
import { EventCategoryModel } from '../../../../../src/Contexts/Panda/EventsCategory/domain/models/event-category.model';

export class EventCategoryRepositoryMock implements EventCategoryRepository {
  private createMock: jest.Mock;

  constructor() {
    this.createMock = jest.fn();
  }

  async create(category: EventCategoryModel): Promise<EventCategoryModel | null> {
    return this.createMock(category);
  }

  assertSaveHaveBeenCalledWith(expected: EventCategoryModel): void {
    expect(this.createMock).toHaveBeenCalledWith(expected);
  }
}
