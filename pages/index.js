import BaseLayout from '../components/layouts/BaseLayout'
import {Component} from 'react'


class Human {

  constructor(words) {
    this.words = words
  }

  talk() {
    console.log('I am talking ' + this.words)
  }

  static eat() {
    console.log('I am eating yo')
  }
}

const human = new Human('Crap')


export default class Index extends Component {
  static async getInitialProps() {
    console.log('Get initial props yo')
    return {crappyData: [1, 2, 3, 4, 5]}
  }

  componentDidMount() {
    human.talk()
    Human.eat()
  }


  render() {
    debugger
    console.log(this.props.crappyData)
    return <BaseLayout>
        <h1>Index page</h1>
    </BaseLayout>
  }
}


