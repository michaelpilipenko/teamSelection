import React, {Component} from "react";
import Paper from "material-ui/Paper";

import PeopleInfoBlock from "./PeopleInfoBlock";

import Img from "../../img/2.jpg";
import Img3 from "../../img/img1.jpeg";
import Img2 from "../../img/img2.jpeg";
import Img4 from "../../img/img5.jpeg";
import Img5 from "../../img/img3.jpg";
import Img6 from "../../img/img4.jpeg";

const style = {
    paper: {
        float: 'left',
        margin: '5px',
        textAlign: 'center',
        width: '99%',
        padding: '5px',
    },
    toolbar: {
        marginTop: '5px',
        height: '120px',
    },
    colorCity:{
        color: '#16a085',
    },
};

const text = {
    text1: 'Прагну робити проекти соціального підприємництва. прихильник виходу на самозабезпечення. легко виходжу на потрібних людей і налагоджую контакт. Амбітний, цілеспрямований, постійно розвиваюся. Можу в короткі терміни вивчити нові навички.',
    text2: 'Все познается в общении. Python, Django, Flask',
    text3: 'I`m the best programmer ^_^',
    text4: 'Всім привіт, Я гарно володію Англійською і Німецькою мовами. Знаю такий стак технологій: Webpack, React + Redux, Less, Angular 2',
    text5: 'Всем привет, хочу в большой проект.',
    text6: 'Шукаю стартап.',
};

class People extends Component{
    render(){
        return(
            <div className="people">
                <Paper zDepth={3} style={style.paper}>
                    <PeopleInfoBlock img={Img} name="Михайло Грушевський" country="Україна" city="Київ" description={text.text1} skill="Front-end інженер" user/>
                    <PeopleInfoBlock img={Img2} name="Валентин Сухарь" country="Россия" city="Москва" description={text.text2} skill="Back-end інженер" user/>
                    <PeopleInfoBlock img={Img3} name="Michael Black" country="USA" city="New York" description={text.text3} skill="Full-stack інженер" user/>
                    <PeopleInfoBlock img={Img6} name="Анна Пилипенко" country="Україна" city="Львів" description={text.text4} skill="Front-end інженер" user/>
                    <PeopleInfoBlock img={Img5} name="Борис Зайвий" country="Україна" city="Харків" description={text.text5} skill="Back-end інженер" user/>
                    <PeopleInfoBlock img={Img4} name="Віктор Михайловський" country="Україна" city="Одеса" description={text.text6} skill="Верстальщик" user/>
                </Paper>
            </div>
        );
    }
}

export default People;