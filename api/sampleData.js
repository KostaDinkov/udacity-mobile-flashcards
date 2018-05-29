export default  {
  decks:{
    'did1':{
      id:'did1',
      name:'Do you know Redux?',
      cards:['cid1','cid2'],
      dateCreated:'dateTime'
    },
    'did2':{
      id:'did2',
      name:'Redux Advanced.',
      cards:['cid3','cid4', 'cid5'],
      dateCreated:'dateTime'
    }

  },
  cards:{
    'cid1':{
      id:'cid1',
      multipleChoice:true,
      question:"What function hooks together the Redux states and Smart Components(in react)?",
      options:[
        {
          text:'connect',
          isCorrect:true
        },
        {
          text:'mapDispatchToProps',
          isCorrect:false
        },
        {
          text:'Middleware',
          isCorrect:false
        },
        {
          text:'connect()',
          isCorrect:true
        }
      ]
    },
    'cid2':{
      id:'cid2',
      multipleChoice:true,
      question:"How do you use React and Redux together?",
      options:[
        {
          text:'Through the Provider',
          isCorrect:true
        },
        {
          text:'import the Provider component from the react-redux package and wrap our root component within.',
          isCorrect:true
        },
        {
          text:'Middleware',
          isCorrect:false
        }
      ]
    },
    'cid3':{
      id:'cid3',
      multipleChoice:true,
      question:"Question three",
      options:[
        {
          text:'Correct option',
          isCorrect:true
        },
        {
          text:'Correct option',
          isCorrect:true
        },
        {
          text:'Incorrect option',
          isCorrect:false
        }
      ]
    },
    'cid4':{
      id:'cid4',
      multipleChoice:false,
      question:"Question four?",
      options:[
        {
          text:'Correct option.',
          isCorrect:false
        },
        {
          text:'Incorrect option.',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        }
      ]
    },
    'cid5':{
      id:'cid5',
      multipleChoice:false,
      question:"Question five?",
      options:[
        {
          text:'Correct option.',
          isCorrect:false
        },
        {
          text:'Incorrect option.',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },
        {
          text:'Incorrect option',
          isCorrect:false
        },{
          text:'Incorrect option',
          isCorrect:false
        }

      ]
    }
  },
  scores:{

  }
};