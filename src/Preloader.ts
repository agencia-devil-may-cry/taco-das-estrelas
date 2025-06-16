import { Scenes } from 'phaser';

export class Preloader1 extends Scenes {
    constructor() {
        super({ key: 'Preloader' });
    }

    create() {
        this.scenes.start('Maps');
    }
}