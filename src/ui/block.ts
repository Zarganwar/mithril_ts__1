import m = require('mithril');
import $ = require('jquery');

export class BlockView {

    public x: number;
    public y: number;
    timerToken: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    getRandomInt() {
        return Math.floor((Math.random() * 100) + 1);
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    start() {
        this.timerToken = setInterval(() => this.move(this.getRandomInt(), this.getRandomInt()), 100);
    }

    stop() {
        clearInterval(this.timerToken);
    }

    view() {
        return m('div', {
                className: 'control',
                onmousemove: (e: MouseEvent) => this.move(e.x, e.y),
                onclick: (e: MouseEvent) => this.start(),
                ondblclick: (e: MouseEvent) => this.stop(),
            },
            m('div', {
                    className: "block",
                    style: {
                        left: this.x + 'px',
                        top: this.y + 'px',
                    }
                }
            )
        );
    }
}
