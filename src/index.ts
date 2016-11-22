import m = require('mithril');
import $ = require('jquery');
import { BlockView } from './ui/block';

import './style.less'

//class FirstSample {
//
//    private current: string;
//
//    constructor() {
//        this.current = '';
//    }
//
//    regenerate() {
//        this.current = 'T' + Math.random();
//    }
//
//    view = () => {
//        return m(
//            'div', {
//                onmouseover: (() => this.regenerate())
//            },
//            'Current value: ' + this.current
//        );
//    }
//}



export = function applicationZero(className: string) {
    m.mount(document.getElementsByClassName(className)[0], {
        controller: () => new BlockView(),
        view: (c: BlockView) => c.view()
    });
}


