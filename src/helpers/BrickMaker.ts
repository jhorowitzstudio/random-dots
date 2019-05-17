class Brick {
  constructor(
    public height: number,
    public width: number,
    public mortar: number
  ) {}
}

export default class BrickMaker {
  static create(event: Brick) {
    return new Brick(event.height, event.width, event.mortar);
  }
}
