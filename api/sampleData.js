export default  {
  decks:{
    'did1':{
      name:'Do you know Redux?',
      cards:['cid1','cid2'],
      dateCreated:'dateTime'
    }

  },
  cards:{
    'cid1':{
      multipleChoice:true,
      question:"What function hooks together the Redux states and Smart Components(in react)?",
      options:[
        {
          text:'connect',
          isCorrect:'true'
        },
        {
          text:'mapDispatchToProps',
          isCorrect:'false'
        },
        {
          text:'Middleware',
          isCorrect:'false'
        },
        {
          text:'connect()',
          isCorrect:'true'
        }
      ]
    },
    'cid2':{
      multipleChoice:true,
      question:"How do you use React and Redux together?",
      options:[
        {
          text:'Through the Provider',
          isCorrect:'true'
        },
        {
          text:'import the Provider component from the react-redux package and wrap our root component within.',
          isCorrect:'true'
        },
        {
          text:'Middleware',
          isCorrect:'false'
        }
      ]
    }
  },
  scores:{
    'deckId':'score'
  }
};