import m = require('mithril');
import $ = require('jquery');
import { BlockView } from './ui/block';

import './style.less'

export = function applicationZero(className: string) {
    m.mount(document.getElementsByClassName(className)[0], {
        controller: () => new BlockView(),
        view: (c: BlockView) => c.view()
    });
}


