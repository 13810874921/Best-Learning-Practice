import {observer} from "mobx-react";
import {observable, action, computed, reaction, autorun, when} from 'mobx';
import React, {Component} from 'react';

class Store {

    @observable
    articals = [{title: 'demo', desc: 'this is a demo', price: 60}];


    @action
    addArtical(name, desc, price) {
        this.articals.push({title: name, desc: desc, price: price});
    }

    @computed
    get articalsCount() {
        return this.articals.length;
    }

    @computed
    get avaragePrice() {
        let totalPrice = 0;
        if (this.articals.length) {
            this.articals.forEach(item => {
                totalPrice += item.price
            })
        }
        return totalPrice/this.articals.length;
    }
}

const store = new Store();

//使用了mobx-react之后，不再需要将store和state做结合了，也不需要在组件里写autorun了
@observer
class MobxClass extends Component {

    addArtical = () => {
        const codes = 'abcdefghijklmnopqrstuvwxyz';
        const price = 10 * Math.floor(Math.random()*100);
        const desc = 'this is a desc';
        let title = '';
        for (let i = 0; i < 6; i++) {
            title += codes[Math.floor(Math.random()*26)]
        }

        store.addArtical(title, desc ,price);
    }

    render() {
        const {articals, articalsCount, avaragePrice} = store;
        return (
            <div>
                <button onClick={this.addArtical}>新增文章</button>
                <p>文章数量：{articalsCount}</p>
                <p>文章平均价格：{avaragePrice}</p>
                <ul>
                    {
                        articals && articals.map((item) => {
                            return <li key={item.title}>{item.title}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default MobxClass;