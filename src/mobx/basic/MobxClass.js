import {observable, action, computed, reaction, autorun, when} from 'mobx';
import React, {Component} from 'react';

class Store {

    @observable
    articals = [{title: 'demo', desc: 'this is a demo', price: 60}];


    @action
    addArtical(name, desc, price) {
        this.articals.push({title: name, desc: desc, price: price});
    }

    @action
    asyncEmptyArtical() {
        setTimeout(() => this.articals = [], 200)
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

//store.articals.length发生了变化，所以autorun可以触发。
//autorun执行后后返回一个dispose函数，如果该函数执行，则可以停止autorun监听。
const autorun1 = autorun(() => {
    console.log(store.articals.length);
    if (store.articals.length > 5) {
        autorun1();
    }
})


//store.articals还是原数组的引用，所以autorun不触发
const autorun2 = autorun((autorun) => {
    console.log(store.articals);
})

//reaction和autorun起的作用差不多
reaction(() => {
    console.log(store.articalsCount)
    return store.articalsCount;
},
(count, reaction) => {
    //可以选择在count达到一定条件的时候注销掉reaction监听
    if (count > 10) {
        reaction.dispose()
    }
}, {})

//when 只会在条件满足时触发一次
const whenDispose = when(
    // 一旦...，但这个alert只会在等于3的时候触发1次，其他时候并不会触发。
    () => store.articalsCount > 2,
    // ... 然后, 如果没提供第二个函数，when 会返回一个 Promise 。它与 async / await 可以完美结合。
    () => {
        alert(store.articalsCount);
    }
);

class MobxClass extends Component {
    state = {
        articals: store.articals,
        articalsCount: store.articalsCount,
        avaragePrice: store.avaragePrice
    }

    componentDidMount() {
        // 这里没有使用mobx-react
        // 这样就无需每次改变都手动执行this.setState了
        autorun(() => {
            this.setState({
                articals: store.articals,
                articalsCount: store.articalsCount,
                avaragePrice: store.avaragePrice
            });
        })
    }

    addArtical = () => {
        const codes = 'abcdefghijklmnopqrstuvwxyz';
        const price = 10 * Math.floor(Math.random()*100);
        const desc = 'this is a desc';
        let title = '';
        for (let i = 0; i < 6; i++) {
            title += codes[Math.floor(Math.random()*26)]
        }

        store.addArtical(title, desc ,price);
        // 如果没有autorun,就只能在每个方法里去写了。
        // this.setState({
        //     articals: store.articals,
        //     articalsCount: store.articalsCount,
        //     avaragePrice: store.avaragePrice
        // });
    }

    asyncEmptyArtical = () => {
        store.asyncEmptyArtical();
    }

    render() {
        const {articals, articalsCount, avaragePrice} = this.state;
        return (
            <div>
                <button onClick={this.addArtical}>新增文章</button>
                <button onClick={this.asyncEmptyArtical}>异步清空文章</button>
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
