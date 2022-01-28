import React,{Component} from 'react'
import "./App.css"
import "./NeonBTN.css"
import Questions from "./Components/Questions/Questions";
import GameEnd from "./Components/GameEnd/GameEnd";
import SectionBeginning from "./Components/SectionBeginning/SectionBeginning";
import MoneyLevels from "./Components/MoneyLevels/MoneyLevels";
import GameHelp from "./Components/GameHelp/GameHelp";
import GamePlayInfo from "./Components/GamePlayInfo/GamePlayInfo";

import NoRight from "./Songs/NoRight.mp3"
import Right from "./Songs/Right.mp3"
import HelpSong from "./Songs/HelpSong.mp3"
import SiteS from "./Songs/SiteS.mp3"
import SiteBackground from "./Songs/SiteBackground.mp3"
import PlayBackground from "./Songs/PlayBackground.mp3"
import StartTimer from "./Songs/StartTimer.mp3"
import FiftyFifty from "./Songs/FiftyFifty.mp3"
import CallFriendPhone from "./Songs/CallFriendPhone.mp3"
import FriendHallClockTime from "./Songs/FriendHallClockTime.mp3"
import GameEndTrove from "./Songs/GameEndTrove.mp3"
import GameEnded from "./Songs/GameEnded.mp3"




let timer




export default class App extends Component {

    state = {
        Questions: [
            {
                id: 0,
                QuestionImg: '',
                Money: 100,
                FM: 0,
                MoneyColor: '',
                Question: "Какая самая большая река?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: 100,
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 20) + 1,
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25) + 1,
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 25) + 1,
                    }
                ],
                Answer: [
                    {id: 0, text: "Амазон", Class: '', Right: true, AnswerNumber: "A",},
                    {id: 1, text: "Конго", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Нехос", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "C",},
                    {id: 3, text: "Волга", Class: '', Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 1,
                QuestionImg: "",
                Money: 200,
                FM: 0,
                MoneyColor: '',
                Question: "Какая река дважды пересекает экватор",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 2,
                        RandomPercent: 100,
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 25),
                    }
                ],
                Answer: [
                    {id: 0, text: "Амазон", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "A",},
                    {id: 1, text: "Нехос", Class: '', Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Конго", Class: '', Right: true, AnswerNumber: "C",},
                    {id: 3, text: "Волга", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 2,
                QuestionImg: "",
                Money: 300,
                FM: 0,
                MoneyColor: '',
                Question: "Какое самое большое озеро в мире",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: 100,
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 25),
                    }
                ],
                Answer: [
                    {id: 0, text: "Каспий", Class: '', Right: true, AnswerNumber: "A",},
                    {id: 1, text: "Севан", Class: '', Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Танганьика", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "C",},
                    {id: 3, text: "Балхаш", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 3,
                QuestionImg: "",
                Money: 400,
                FM: 0,
                MoneyColor: '',
                Question: "Какая самая большая гора в мире",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 3,
                        RandomPercent: 100,
                    }
                ],
                Answer: [
                    {id: 0, text: "Арарат", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "A",},
                    {id: 1, text: "килиманджаро", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Монблан", Class: '', Right: false, AnswerNumber: "C",},
                    {id: 2, text: "Эверест", Class: '', Right: true, AnswerNumber: "D",},
                ],
            },
            {
                id: 4,
                QuestionImg: "",
                Money: 500,
                FM: 0,
                MoneyColor: '',
                Question: "Из указанных какое Море без Границ",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: 100,
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 20),
                    }
                ],
                Answer: [
                    {id: 0, text: "Карибский", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "A",},
                    {id: 1, text: "Саргассово", Class: '', Right: true, AnswerNumber: "B",},
                    {id: 2, text: "Балтик", Class: '', Right: false, AnswerNumber: "C",},
                    {id: 3, text: "Средиземное", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 5,
                QuestionImg: "",
                Money: 600,
                FM: 600,
                MoneyColor: '',
                Question: "Что народная мудрость советует отдать врагу?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: 100,
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 20),
                    }
                ],
                Answer: [
                    {id: 0, text: "Завтрак", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "A",},
                    {id: 1, text: "Ужин", Class: '', Right: true, AnswerNumber: "B",},
                    {id: 2, text: "Обед", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "C",},
                    {id: 3, text: "Полдник", Class: '', Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 6,
                QuestionImg: "",
                Money: 700,
                FM: 600,
                MoneyColor: '',
                Question: "Чему в Туле Установлен памятник?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 3,
                        RandomPercent: 100,
                    }
                ],
                Answer: [
                    {id: 0, text: "Хлебу", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "A",},
                    {id: 1, text: "Кексу", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Бублику", Class: '', Right: false, AnswerNumber: "C",},
                    {id: 3, text: "прянику", Class: '', Right: true, AnswerNumber: "D",},
                ],
            },
            {
                id: 7,
                QuestionImg: "",
                Money: 800,
                FM: 600,
                MoneyColor: '',
                Question: "Чего не ела Героиня сказки \"Гуси-лебеди\", когда спасалась с братцем от погони?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: 100,
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 25),
                    }
                ],
                Answer: [
                    {id: 0, text: "Фуа-гра", Class: '', Right: true, AnswerNumber: "A",},
                    {id: 1, text: "Пирожок", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Кисель", Class: '', Right: false, AnswerNumber: "C",},
                    {id: 3, text: "Яблоко", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 8,
                QuestionImg: "",
                Money: 900,
                FM: 600,
                MoneyColor: '',
                Question: "Что обычно едят горячим?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 2,
                        RandomPercent: 100,
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 25),
                    }
                ],
                Answer: [
                    {id: 0, text: "Окрошку", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "A",},
                    {id: 1, text: "Гасначо", Class: '', Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Рассольник", Class: '', Right: true, AnswerNumber: "C",},
                    {id: 3, text: "Свекольник", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 9,
                QuestionImg: "",
                Money: 1000,
                FM: 600,
                MoneyColor: '',
                Question: "Какой ингредиент знаменитой пиццы \"Маргарита\" не символизирует ни одной из цветов флага Инталии?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 3,
                        RandomPercent: 100,
                    }
                ],
                Answer: [
                    {id: 0, text: "Томаты", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "A",},
                    {id: 1, text: "Моцарелла", Class: '', Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Базилик", Class: '', FiftyFifty: false, Right: false, AnswerNumber: "C",},
                    {id: 3, text: "Оливковое масло", Class: '', Right: true, AnswerNumber: "D",},
                ],
            },
            {
                id: 10,
                QuestionImg: "",
                Money: 1100,
                FM: 1000,
                MoneyColor: '',
                Question: "В блюде немецкой кухни \"Небо и земля\" картофель - это \"земля\". А что символизирет небеса?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: 100,
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 20),
                    }
                ],
                Answer: [
                    {id: 0, text: "Грибы", Class: '', Right: false, AnswerNumber: "A",},
                    {id: 1, text: "Яблоки", Class: '', Right: true, AnswerNumber: "B",},
                    {id: 2, text: "Петрушка", Class: '', Right: false, AnswerNumber: "C",},
                    {id: 3, text: "Клубника", Class: '', Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 11,
                QuestionImg: "",
                Money: 1200,
                FM: 1000,
                MoneyColor: '',
                Question: "Какое блюдо создал Французский повар Андре Дюпонсо стоявший на службе у Русского графа?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 2,
                        RandomPercent: 100,
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 20),
                    }
                ],
                Answer: [
                    {id: 0, text: "Цыплёнок табака", Class: '', Right: false, AnswerNumber: "A",},
                    {id: 1, text: "Шницель по-венски", Class: '', Right: false, AnswerNumber: "B",},
                    {id: 2, text: "Бефстроганов", Class: '', Right: true, AnswerNumber: "C",},
                    {id: 3, text: "Ростбиф", Class: '', Right: false, AnswerNumber: "D",},
                ],
            },
            {
                id: 12,
                QuestionImg: "",
                Money: 1300,
                FM: 1000,
                MoneyColor: '',
                Question: "Неправильное написание какого слова объясняется тем, мода не блюдо пришла не из Японии, а из Европы?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 3,
                        RandomPercent: 100,
                    }
                ],
                Answer: [
                    {id: 0, text: "Тэмпура", Class: '', Right: false, AnswerNumber: "A"},
                    {id: 1, text: "Рамэн", Class: '', Right: false, AnswerNumber: "B"},
                    {id: 2, text: "Гёдза", Class: '', Right: false, AnswerNumber: "C"},
                    {id: 3, text: "Суши", Class: '', Right: true, AnswerNumber: "D"},
                ],
            },
            {
                id: 13,
                QuestionImg: "",
                Money: 1400,
                FM: 1000,
                MoneyColor: '',
                Question: "Что стало популярным благодаря \"Ресторану трёх корон\",обслуживавшему посетителей Всемирной выставки 1939 года?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: 100,
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 2,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 25),
                    }
                ],
                Answer: [
                    {id: 0, text: "Шведский стол", Class: '', Right: true, AnswerNumber: "A"},
                    {id: 1, text: "Фастфуд", Class: '', Right: false, AnswerNumber: "B"},
                    {id: 2, text: "Еда на вынос", Class: '', Right: false, AnswerNumber: "C"},
                    {id: 3, text: "Коктейли", Class: '', Right: false, AnswerNumber: "D"},
                ],
            },
            {
                id: 14,
                QuestionImg: "",
                Money: 1500,
                FM: 1000,
                MoneyColor: '',
                Question: "Какой поэт написал: \"Я очень люблю копчёную сельдь, и яйца, и жирный творог\"?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 2,
                        RandomPercent: 100,
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 25),
                    }
                ],
                Answer: [
                    {id: 0, text: "Джордж Байрон", Class: '', Right: false, AnswerNumber: "A"},
                    {id: 1, text: "Поль Верлен", Class: '', Right: false, AnswerNumber: "B"},
                    {id: 2, text: "Генрих Гейне", Class: '', Right: true, AnswerNumber: "C"},
                    {id: 3, text: "Гавриил Державин", Class: '', Right: false, AnswerNumber: "D"},
                ],
            },
            {
                id: 15,
                QuestionImg: "",
                Money: 1600,
                FM: 1000,
                MoneyColor: '',
                Question: "Над выведением какого сорта пшеницы трудился Трофим Лысенко?",
                Hell: [
                    {
                        id: 0,
                        RandomPercent: Math.floor(Math.random() * 20),
                    },
                    {
                        id: 1,
                        RandomPercent: Math.floor(Math.random() * 25),
                    },
                    {
                        id: 2,
                        RandomPercent: 100,
                    },
                    {
                        id: 3,
                        RandomPercent: Math.floor(Math.random() * 25),
                    }
                ],
                Answer: [
                    {id: 0, text: "Сахариной", Class: '', Right: false, AnswerNumber: "A"},
                    {id: 1, text: "Кремнистой", Class: '', Right: false, AnswerNumber: "B"},
                    {id: 2, text: "Ветвистой", Class: '', Right: true, AnswerNumber: "C"},
                    {id: 3, text: "Мясистой", Class: '', Right: false, AnswerNumber: "D"},
                ],
            },
        ],
        Answers: [],
        LeaderBoard: [
            {
                id: 0,
                UserName: 'Aro',
                RightScore: 16,
                Time: 200,
            },
            {
                id: 1,
                UserName: 'Arnoldtest',
                RightScore: 16,
                Time: 243,
            },
            {
                id: 2,
                UserName: "Test",
                RightScore: 4,
                Time: 150,
            },
            {
                id: 3,
                UserName: "Test2",
                RightScore: 4,
                Time: 100,
            },
            {
                id: 4,
                UserName: "Test3",
                RightScore: 5,
                Time: 240,
            },
        ],
        LeaderBoardActive:false,
        RightScore: 0,
        Start: false,
        Timer: 1,
        UserMoney: 0,
        Time: 0,
        FixedMoney: 0,
        UserName: '',
        LabelColor: '',
        HellRightHelp: 0,
        HellButton: false,
        HellRight: false,
        TwoButton: false,
        FriendButton: false,
        FriendHelp: false,
        FriendPhone: false,
        RoundTime: 19,
        StartTimeout: 5,
        StartTimeoutTF: false,
        WindowFix: true,
        SongNoRight: new Audio(NoRight),
        SongRight: new Audio(Right),
        SongHelpSong: new Audio(HelpSong),
        SongPlayBackground: new Audio(PlayBackground),
        SongStartTimer: new Audio(StartTimer),
        SongFiftyFifty: new Audio(FiftyFifty),
        SongCallFriendPhone: new Audio(CallFriendPhone),
        SongFriendHallClockTime: new Audio(FriendHallClockTime),
        SongGameEndTrove: new Audio(GameEndTrove),
        SongGameEnded: new Audio(GameEnded),
        SongSiteBackground: new Audio(SiteBackground),
        SongSite: new Audio(SiteS),
        Null:0,
        Nothing:"",
        RoundEnd: false,
        TakeMoney:false,
    }



    componentDidMount(){
            this.state.SongSiteBackground.pause()
            this.state.SongSite.pause()
            this.state.SongSite.load()
            this.state.SongSite.play()
            this.state.SongSite.onended = ()=>{
                this.state.SongSiteBackground.pause()
                this.state.SongSiteBackground.load()
                this.state.SongSiteBackground.play()
                this.setState({})
                this.state.SongSiteBackground.onended = ()=>{
                    this.state.SongSiteBackground.pause()
                    this.state.SongSiteBackground.load()
                    this.state.SongSiteBackground.play()
                    this.setState({})
                }
            }

            document.body.addEventListener('keypress',this.GameKeyPress)
        document.body.addEventListener('keyup',this.GameKeyUp)
        document.body.addEventListener('keydown',this.GameKeyDown)
        this.setState({})
    }

    GameKeyUp = (e) => {
        if(e.key == "H" || e.key == "h"){
            alert("Test Done")
        }
    }
    GameKeyDown = (e) => {
        if(e.key === "A" || e.key === "a"){
            alert("Test Done")
        }
    }
    GameKeyPress = (e) => {
        if(e.key == 'Enter' && this.state.Start === false){
            this.Start()
            this.setState({})
        }
        if(e.key == "Enter" && this.state.RoundEnd === true){
            this.Replay()
            this.setState({})
        }
    }
    


    Answer = (e, elem) => {
        clearInterval(timer)
        setTimeout(()=>{
            timer = setInterval(() => {
                this.state.Timer += 1
                this.state.RoundTime -= 1
                this.setState({})
            }, 1000)
        },3000)
        this.state.SongRight.pause()
        this.state.SongRight.load()
        this.state.SongRight.play()
        this.state.Answers.push(e)
        if (e.Right) {
            e.Class = "Average"
            elem.MoneyColor = "MoneyColorAverage"
            setTimeout(()=>{
                e.Class = "true"
                elem.MoneyColor = "MoneyColorTrue"
            },1000)
            this.state.RightScore += 1
            this.state.UserMoney = elem.Money
            this.state.FixedMoney = elem.FM
            this.state.RoundTime = 20
            setTimeout(()=>{
                this.state.HellRightHelp += 1
                this.setState({})
            },2000)
            this.setState({})
        } else {
            this.state.SongNoRight.pause()
            this.state.SongRight.pause()
            this.state.SongNoRight.load()
            this.state.SongNoRight.play()
            this.state.RightScore = 0
            this.state.UserMoney = 0
            this.state.FixedMoney = 0
            e.Class = "Average"
            elem.MoneyColor = "MoneyColorAverage"
            setTimeout(()=>{
                e.Class = "false"
                elem.MoneyColor = "MoneyColorFalse"
            },1000)
            setTimeout(()=>{
                this.state.RoundEnd = true
                this.state.RoundTime = 0
            },2000)
            setTimeout(() => {
                let trueFind = elem.Answer.find(el => el.Right === true)
                trueFind.Class = "true"
            }, 1000)
        }

        this.setState({})
    }

    Start = () => {
            this.state.SongSite.pause()
            this.state.SongSiteBackground.pause()
            this.state.SongStartTimer.load()
            this.state.SongStartTimer.pause()
            this.state.SongStartTimer.play()
            this.state.SongStartTimer.onended = ()=>{
                this.state.SongPlayBackground.load()
                this.state.SongPlayBackground.pause()
                this.state.SongPlayBackground.play()
                this.state.SongPlayBackground.onended = ()=>{
                    this.state.SongPlayBackground.load()
                    this.state.SongPlayBackground.pause()
                    this.state.SongPlayBackground.play()
                }
            }
            this.state.StartTimeoutTF = true
            this.state.Start = true
            var startTimeout
            setTimeout(()=>{
            startTimeout = setInterval(() => {
                this.state.StartTimeout --
                this.setState({})
            }, 1000)
            },10)
            setInterval(()=>{
            if(this.state.StartTimeout === 0){
                setTimeout(()=>{
                    clearInterval(startTimeout)
                    this.state.StartTimeoutTF = false
                    this.setState({})
                },500)
            }
            },0)
            setTimeout(() => {
                if (this.state.Start === true) {
                    timer = setInterval(() => {
                        this.state.Timer += 1
                        this.state.RoundTime -= 1
                        this.setState({})
                    }, 1000)
                }
            }, 5000)
            this.state.LabelColor = "LabelColorAqua"

        setInterval(() => {
            if (this.state.Questions.length === this.state.Answers.length || this.state.RoundTime < 1 || this.state.RoundEnd === true) {
                clearInterval(timer)
                this.state.Time = this.state.Timer
                this.setState({})
            }
        }, 0)
        this.setState({})

    }

    Replay = () => {
        setTimeout(()=>{
            this.componentDidMount()
        },50)
        var LeaderFind = this.state.LeaderBoard.find(lb => lb.UserName.trim().toUpperCase() === this.state.UserName.trim().toUpperCase())
        var Leader = {
            id: this.state.LeaderBoard.length,
            UserName: this.state.UserName,
            RightScore: this.state.RightScore,
            Time: this.state.Time,
        }
        if (LeaderFind === undefined) {
            this.state.LeaderBoard.push(Leader)
        } else {
            if(LeaderFind.RightScore < this.state.RightScore){
                LeaderFind.RightScore = this.state.RightScore
                LeaderFind.Time = this.state.Time
            }else if(LeaderFind.RightScore > this.state.RightScore){
                var test1 = LeaderFind.RightScore
                var test2 = LeaderFind.Time
                LeaderFind.RightScore = test1
                LeaderFind.Time = test2
            }else if(LeaderFind.RightScore == this.state.RightScore && LeaderFind.Time >= this.state.Time){
                LeaderFind.RightScore = this.state.RightScore
                LeaderFind.Time = this.state.Time
            }
            this.setState({})
        }

        this.state.Questions.map((elem,index)=>{
            elem.MoneyColor = this.state.Nothing
            this.setState({})
            elem.Answer.map((e,i)=>{
                if(e.FiftyFifty === true){
                    e.FiftyFifty = false
                    this.setState({})
                }
                if(e.Class !== ""){
                    e.Class = this.state.Nothing
                    this.setState({})
                }
            })
        })

        this.state.Start = false
        this.state.HellButton = false
        this.state.TwoButton = false
        this.state.HellRight = false
        this.state.FriendButton = false
        this.state.FriendHelp = false
        this.state.FriendPhone = false
        this.state.Timer = 1
        this.state.RoundTime = 19
        this.state.Answers = []
        this.state.RightScore = 0
        this.state.UserMoney = 0
        this.state.FixedMoney = 0
        this.state.HellRightHelp = 0
        this.state.StartTimeout = 5
        this.state.StartTimeoutTF = false
        this.state.WindowWindowFix = true
        this.state.RoundEnd = false
        this.state.TakeMoney = false
        this.state.SongGameEnded.load()
        this.state.SongGameEnded.pause()
        this.setState({})
    }

    valUserName = (e) => {
        this.state.UserName = e.target.value
        if (this.state.UserName !== "") {
            this.state.LabelColor = "LabelColorAqua"
        } else {
            this.state.LabelColor = "LabelColorRed"
        }
        this.setState({})
    }


    GHelpHall = () => {
        this.state.HellRight = true
        this.state.WindowFix = false
        this.state.SongHelpSong.pause()
        this.state.SongHelpSong.load()
        this.state.SongHelpSong.play()
        this.state.SongPlayBackground.pause()
        clearInterval(timer)
        this.state.SongFriendHallClockTime.pause()
        this.state.SongFriendHallClockTime.load()
        this.state.SongFriendHallClockTime.play()
        this.state.SongFriendHallClockTime.onended = ()=>{
            this.state.SongFriendHallClockTime.pause()
            this.state.SongFriendHallClockTime.load()
            this.state.SongFriendHallClockTime.play()
        }
        this.setState({})
    }

    CloseHell = () => {
        this.state.SongPlayBackground.play()
        this.state.SongFriendHallClockTime.pause()
        this.state.WindowFix = true
        this.state.HellRight = false
        this.state.HellButton = true
        timer = setInterval(() => {
            this.state.Timer += 1
            this.state.RoundTime -= 1
            this.setState({})
        }, 1000)
        this.setState({})
    }

    GHelpTwo = () => {
        this.state.TwoButton = true
        this.state.SongFiftyFifty.pause()
        this.state.SongFiftyFifty.play()
        for (var FiFi = 0; FiFi < this.state.Questions[this.state.HellRightHelp].Answer.length; FiFi++) {
            if (this.state.Questions[this.state.HellRightHelp].Answer[FiFi].FiftyFifty === false) {
                this.state.Questions[this.state.HellRightHelp].Answer[FiFi].FiftyFifty = true
            }
        }
        this.setState({})
    }

    GFriendHelp = () => {
        this.state.SongHelpSong.pause()
        this.state.SongHelpSong.load()
        this.state.SongHelpSong.play()
        this.state.SongPlayBackground.pause()
        setTimeout(()=>{
            this.state.SongCallFriendPhone.pause()
            this.state.SongCallFriendPhone.load()
            this.state.SongCallFriendPhone.play()
        },50)
        this.state.WindowFix = false
        this.state.FriendHelp = true
        clearInterval(timer)
        setTimeout(() => {
            this.state.FriendPhone = true
            this.state.SongFriendHallClockTime.pause()
            this.state.SongFriendHallClockTime.load()
            this.state.SongFriendHallClockTime.play()
            this.state.SongFriendHallClockTime.onended = ()=>{
                this.state.SongFriendHallClockTime.pause()
                this.state.SongFriendHallClockTime.load()
                this.state.SongFriendHallClockTime.play()
            }
            this.setState({})
        }, 5000)
        this.setState({})
    }

    CloseFriend = () => {
        this.state.SongPlayBackground.pause()
        this.state.SongPlayBackground.play()
        this.state.SongFriendHallClockTime.pause()
        this.state.WindowFix = true
        this.state.FriendHelp = false
        this.state.FriendButton = true
        timer = setInterval(() => {
            this.state.Timer += 1
            this.state.RoundTime -= 1
            this.setState({})
        }, 1000)

        this.setState({})
    }

    OpenLeaderBoard = () => {
        this.state.LeaderBoardActive = true
        this.setState({})
    }

    CloseLeaderBoard = () => {
        this.state.LeaderBoardActive = false
        this.setState({})
    }

    TakeMoney = () => {
        this.state.TakeMoney = true
        this.state.RoundTime = 0
        this.state.RoundEnd = true
        this.setState({})
    }
    
    componentWillUnmount() {
        console.log("finally")
        this.state.SongSite.pause()
        this.state.SongSiteBackground.pause()
        this.state.SongPlayBackground.pause();
    }
    render() {

        for (var lb = 0; lb < this.state.LeaderBoard.length; lb++) {
            for (var lbf = 0; lbf < this.state.LeaderBoard.length; lbf++) {
                if (this.state.LeaderBoard[lb].RightScore > this.state.LeaderBoard[lbf].RightScore) {
                    var lblbf = this.state.LeaderBoard[lb]
                    this.state.LeaderBoard[lb] = this.state.LeaderBoard[lbf]
                    this.state.LeaderBoard[lbf] = lblbf
                } else if (this.state.LeaderBoard[lb].RightScore === this.state.LeaderBoard[lbf].RightScore && this.state.LeaderBoard[lb].Time < this.state.LeaderBoard[lbf].Time) {
                    var lblbf = this.state.LeaderBoard[lb]
                    this.state.LeaderBoard[lb] = this.state.LeaderBoard[lbf]
                    this.state.LeaderBoard[lbf] = lblbf
                }
            }
        }

        if (this.state.Questions.length === this.state.Answers.length || this.state.RoundTime < 1 || this.state.GameEnd === true) {
            this.state.SongPlayBackground.pause()
            this.state.SongRight.pause()
            this.state.SongNoRight.pause()
            this.state.SongGameEnded.play()
        }

        if (this.state.RoundTime < 1) {
            this.state.RoundTime = 0
        }

        return (

            <>
                <div className='gameBody'>

                {

                    this.state.Start ?

                        <section className='section'>

                            {

                                this.state.Questions.length === this.state.Answers.length || this.state.RoundTime < 1 || this.state.RoundEnd === true ?

                                    <div className={"GameEndWindow"}>

                                        <GameEnd
                                            state={this.state}
                                            Replay={this.Replay}
                                        />

                                    </div>

                                    :

                                    null

                            }

                            {
                                this.state.StartTimeoutTF ?
                                    <div className={"StartTimeoutWindow"}>
                                        <h1>{this.state.StartTimeout}</h1>
                                    </div>
                                    :
                                    null
                            }

                            <>

                                <GameHelp
                                    state={this.state}
                                    GFriendHelp={this.GFriendHelp}
                                    CloseHell={this.CloseHell}
                                    GHelpTwo={this.GHelpTwo}
                                    GHelpHall={this.GHelpHall}
                                    CloseFriend={this.CloseFriend}
                                />

                                <MoneyLevels
                                    state={this.state}
                                />

                                <GamePlayInfo
                                    TakeMoney = {this.TakeMoney}
                                    state={this.state}
                                />

                                {this.state.Questions.map((elem, index) => {
                                    return (

                                        <Questions
                                            Answer={this.Answer}
                                            state={this.state}
                                            Qindex={index}
                                            Qelem={elem}
                                        />

                                    )
                                })}

                            </>

                        </section>

                        :
                        
                        <SectionBeginning
                            state={this.state}
                            // valUserName={this.valUserName}
                            Start={this.Start}
                            OpenLeaderBoard = {this.OpenLeaderBoard}
                            CloseLeaderBoard = {this.CloseLeaderBoard}
                        />

                }
                </div>
            </>

        )

    }


}







