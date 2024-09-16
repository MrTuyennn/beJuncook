import { BookRepository } from "../domain/entities/BookRepository";

export class GetAllBooks {
  constructor(private bookRepository: BookRepository) {}

  async execute() {
    return await this.bookRepository.findAll();
  }
}
