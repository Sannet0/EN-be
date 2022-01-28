import { Controller, Get } from '@nestjs/common';

@Controller('')
export class HelloController {

  @Get()
  hello() {
    return 'Hello, this is API for test task. Welcome!'
  }
}
