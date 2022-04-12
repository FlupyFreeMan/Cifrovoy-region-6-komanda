import React, {useState, Component} from "react"
import testsData from "./TestsData.js"
import TestCon from "./TestController.js"
import './Tests.css';
import { number } from "yup";
import resultData from "./ResultData.js"
import { type } from "@testing-library/user-event/dist/type";





export default class Tests extends Component {
  constructor() {
    super();
    
    // this.currentTest = 0;
    // this.showResult = false;
    this.state = {
      currentTest:0,
      showResult: false,                            //измени на false
      ansArray: [],
      resultatId: -1,                               //измени на -1
      arr: [
        {
          max_element: number,
          blockAnswer: [],
        },
      ],
      // ansTest: {
      //   max_element: -1,
      //   blockAnswer: [-1,-1,-1,-1,-1],
      // },
    };
  }

  // buf = {
  //   max_element: -1,
  //   blockAnswer: [-1,-1,-1,-1,-1],
  // };
  // resultat = {id_res: number,};

  

  changeResultId(props) {
    this.setState({resultatId: props});
  }
  
  render() {
    const testList = testsData;
    let testResults = resultData;
    // const currentTest= 0;
    // const showResult = false;


    const clickHandleAnswer = (props, max, index) => {

      if (props < (max - 1)) {
        if(index === 0) {
          let oldCurrentTest = this.state.currentTest;
          this.setState({currentTest : ++oldCurrentTest});
        }
        else {
          let oldCurrentTest = this.state.currentTest;
          this.setState({currentTest : ++oldCurrentTest});
        }
        addElementArrayAnswer(index);
      } else if (props === (max - 1)) {
        addElementArrayAnswer(index);
        resultQuest();
        console.clear();
        // console.log(this.state.arr[1].max_element, this.state.arr[2].max_element, this.state.arr[3].max_element, this.state.arr[4].max_element);
        console.log("Array: ",this.state.arr);
        let b = resultTest()

        console.log("Искомый айди: ",b);

        // this.changeResultId(b);
        this.setState({resultatId: b});
        // console.log("айди: ",this.state);
        this.setState({showResult : true});
        
      }

    }
    


    const addElementArrayAnswer = (props) => {
      let copyArr = this.state.ansArray;
      copyArr.push(props);
      this.setState({ansArray: copyArr});
    }
    

    const resultQuest = () => {
      // console.clear();
      let copy_arr = this.state.ansArray;

      // console.log({copy_arr});


      for(let i = 0; i < copy_arr.length/5; i++) {
        let buffer = [];

        for(let j = 0; j < 5; j++) {
          let k = copy_arr[(i*5 + j)];
          buffer.push(k);

        }

        let element = addDataInBlock(buffer);
        // console.log({element});

        addBlockInArray(element);

      }
    }

    const addBlockInArray = (props) => {
      let copy = this.state.arr;
      copy.push(props);
      this.setState({arr: copy});
    }

    const addDataInBlock = (props) => {
      let copy= {
        max_element: number,
        blockAnswer: [],
      };
      copy.blockAnswer = props;
      copy.max_element = maxElementsInArr (copy.blockAnswer);
      // console.log({copy});
      return copy;
    }

    const maxElementsInArr = (props) => {
      let k = 0;
      for(let i=0; i < props.length; i++) {
        if(props[i] === 0) {
          k++;
        }
      }
      if (k > 2) {
        return 0;
      }
      else {
        return 1;
      }
    }

    const resultTest = () =>{
      let result = "";
      if (this.state.arr[1].max_element === 0 && this.state.arr[2].max_element === 0 && this.state.arr[3].max_element === 0 && this.state.arr[4].max_element === 0) {
        // Вы Гамлет
        result = "Гамлет";
      }
      else if (this.state.arr[1].max_element > 0 && this.state.arr[2].max_element > 0 && this.state.arr[3].max_element > 0 && this.state.arr[4].max_element > 0) {
        // Вы Габен
        result = "Габен";
      }
      else if (this.state.arr[1].max_element > 0 && this.state.arr[2].max_element > 0 && this.state.arr[3].max_element === 0 && this.state.arr[4].max_element === 0) {
      // Вы Есенин
        result = "Есенин";
      }
      else if (this.state.arr[1].max_element === 0 && this.state.arr[2].max_element === 0 && this.state.arr[3].max_element > 0 && this.state.arr[4].max_element > 0) {
      // Вы Штирлиц
        result = "Штирлиц";
      }
      else if (this.state.arr[1].max_element > 0 && this.state.arr[2].max_element > 0 && this.state.arr[3].max_element > 0 && this.state.arr[4].max_element === 0) {
      // Вы Гексли
        result = "Гексли";
      }
      else if (this.state.arr[1].max_element > 0 && this.state.arr[2].max_element > 0 && this.state.arr[3].max_element === 0 && this.state.arr[4].max_element > 0) {
      // Вы Достоевский
        result = "Достоевский";
      }
      else if (this.state.arr[1].max_element > 0 && this.state.arr[2].max_element === 0 && this.state.arr[3].max_element > 0 && this.state.arr[4].max_element > 0) {
      // Вы Гюго
        result = "Гюго";
      }
      else if (this.state.arr[1].max_element === 0 && this.state.arr[2].max_element > 0 && this.state.arr[3].max_element > 0 && this.state.arr[4].max_element > 0) {
      // Вы Джек Лондон
        result = "Джек Лондон";
      }
      else if (this.state.arr[1].max_element > 0 && this.state.arr[2].max_element === 0 && this.state.arr[3].max_element === 0 && this.state.arr[4].max_element > 0) {
      // Вы Драйзер
        result = "Драйзер";
      }
      else if (this.state.arr[1].max_element === 0 && this.state.arr[2].max_element > 0 && this.state.arr[3].max_element > 0 && this.state.arr[4].max_element === 0) {
      // Вы Дон Кихот
        result = "Дон Кихот";
      }
      else if (this.state.arr[1].max_element === 0 && this.state.arr[2].max_element === 0 && this.state.arr[3].max_element === 0 && this.state.arr[4].max_element > 0) {
      // Вы Максим Горький
        result = "Максим Горький";
      }
      else if (this.state.arr[1].max_element === 0 && this.state.arr[2].max_element === 0 && this.state.arr[3].max_element > 0 && this.state.arr[4].max_element === 0) {
      // Вы Жуков
        result = "Жуков";
      }
      else if (this.state.arr[1].max_element === 0 && this.state.arr[2].max_element > 0 && this.state.arr[3].max_element === 0 && this.state.arr[4].max_element === 0) {
      // Вы Бальзак
        result = "Бальзак";
      }
      else if (this.state.arr[1].max_element > 0 && this.state.arr[2].max_element === 0 && this.state.arr[3].max_element === 0 && this.state.arr[4].max_element === 0) {
      // Вы Дюма
        result = "Дюма";
      }
      else if (this.state.arr[1].max_element === 0 && this.state.arr[2].max_element > 0 && this.state.arr[3].max_element === 0 && this.state.arr[4].max_element > 0) {
      // Вы Робеспьер 
        result = "Робеспьер";
      }
      else if (this.state.arr[1].max_element > 0 && this.state.arr[2].max_element === 0 && this.state.arr[3].max_element > 0 && this.state.arr[4].max_element === 0) {
      // Вы Наполеон
        result = "Наполеон";
      }
      else {
        result = "404";
      }
      console.log("Вы ",result);
      for (let i = 0; i < testResults.length; i++) {
        if (testResults[i].name === result) {
          let copy = testResults[i].id;;
          // console.log("Копи рес айди: ",copy);
          return copy;
          // this.setState({id_res : copy});
        }
      }
      return -1;
      // console.log("Res: ",this.resultat.id_res);

    }


    return(
      <div>
         { this.state.showResult === true ?
          <div className="result_body ">
            <div className="result_box">
              <div className="result_num_box">
                <div className="result_text_result">Результат</div>
              </div>
              <div className="result_elemetns_box">
                {/* {this.state.arr.map(item => 
                  <div>
                     Макс массива: {item.max_element}; Массив: {item.blockAnswer.map(element => <>{element}</>)}
                  </div>
                )}  */}
                {/* {this.state.arr[0].max_element} */}
                {/* {this.state.ansArray.map(item => <div>{item}</div>)} */}
                {/* ResId: {this.state.resultatId} */}
                {testResults.filter(item => item.id === this.state.resultatId).map(item => (
                  <div>
                    <h1 className="font_text result_name">Вы {item.name}</h1>
                    <div className="font_text result_about">{item.about}</div>
                    <div className="font_text result_director_header">{item.director_header}</div>
                    <div className="font_text ">{item.director.map(el1 =>
                      <div className="font_text result_director_elements">
                        {el1}
                      </div>
                    )}</div>
                    <div className="font_text"><div className="result_motiv_header">Мотивы и цель: </div> <div className="result_motiv">{item.motiv}</div></div>
                    <div className="font_text"><div className="result_motiv_header">Отношение к закону:</div><div className="result_motiv">{item.law}</div></div>
                    <div className="font_text"><div className="result_motiv_header">Стратегия: </div><div className="result_motiv">{item.strategy}</div></div>
                    <h2 className="font_text result_strong_weak_header">{item.strong_header}</h2>
                    <div className="font_text">
                      {item.strong.map(el2 => 
                        <div className="font_text result_strong_weak_elements">
                          {el2}
                        </div>
                      )}
                    </div>
                    <h2 className="font_text result_strong_weak_header">{item.weak_header}</h2>
                    <div className="font_text">
                      {item.weak.map(el3 =>
                        <div className="font_text result_strong_weak_elements">
                          {el3}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          : 
          <div>
            <div className="text_h1_text">Выберите верные для вас утверждения и опрелелите свой тип личности</div>
            <div className="test_body ">
              <div className="test_box">
                <div className="test_num_box">
                  <div className="test_text_num_quest">Вопрос {this.state.currentTest + 1}</div>
                </div>
                <div className="test_answer_box">
                  {testList[this.state.currentTest].answers.map((item,index) => (
                    <div  className={"test_answer_element element_"+ index} onClick={() => clickHandleAnswer(this.state.currentTest, testList.length, index)}>
                      {item.answerText}
                    </div>
                  ))}
                </div>
              </div>
          </div>
         </div>
        }
      </div>
     
      // <div>
      //   {/* {this.testTest()} */}
        
      //   <div className="test_body ">
      //       <div className="test_box">
      //         <div className="test_num_box">
      //           <div className="test_text_num_quest">Вопрос {this.state.currentTest + 1}</div>
      //         </div>
      //         <div className="test_answer_box">
      //           {testList[this.state.currentTest].answers.map((item,index) => (
      //             <div className={"test_answer_element element_"+ index} onClick={() => 
      //               clickHandleAnswer(this.state.currentTest, testList.length, 0)}>{item.answerText}  - currentTest: {this.state.currentTest} - Len: {testList.length} - {this.state.string_test}</div>
      //           ))}
      //         </div>
      //       </div>
      //   </div>
      
      // </div>
     
    );
    
  }
}