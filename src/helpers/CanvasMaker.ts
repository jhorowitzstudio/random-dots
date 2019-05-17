class Canvas {
    constructor(
      public height: number,
      public width: number
    ) {}
  }
  
  export default class CanvasMaker {
    static create(event: Canvas) {
      return new Canvas(event.height, event.width);
    }
  }
  