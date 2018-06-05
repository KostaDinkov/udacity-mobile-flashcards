export default  {
  decks:{
    'did1':{
      id:'did1',
      name:'Do you know Redux',
      cards:['cid1','cid2'],
      dateCreated:'dateTime'
    },
    'did2':{
      id:'did2',
      name:'Star Wars Trivia',
      cards:['cid3','cid4', 'cid5','cid6'],
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
          text:'The connect() function.',
          answer:true
        },
        {
          text:'The mapStateToProps() function.',
          answer:false
        },
        {
          text: 'The hookState() function',
          answer: false
        }

      ]
    },
    'cid2':{
      id:'cid2',
      multipleChoice:true,
      question:"How do you use React and Redux together?",
      options:[
        {
          text:'By passing the store as a prop to the root component',
          answer:false
        },
        {
          text:'Import the Provider component from the react-redux package and wrap our root component within.',
          answer:true
        },
        {
          text:'Through Middleware.',
          answer:false
        }
      ]
    },
    'cid3':{
      id:'cid3',
      multipleChoice:true,
      question:"In how many languages is C-3P0 fluent?",
      options:[
        {
          text:'More than six million',
          answer:false
        },
        {
          text:'More than a hundred',
          answer:true
        },
        {
          text:'More than six thousand',
          answer:false
        }
      ]
    },
    'cid4':{
      id:'cid4',
      multipleChoice:false,
      question:"What was Princess Leia's last name?",
      options:[
        {
          text:'Fisher',
          answer:false
        },
        {
          text:'Organa',
          answer:true
        },
        {
          text:'Amidala',
          answer:false
        },
        {
          text:'Antilles',
          answer:false
        },
      ]
    },
    'cid5':{
      id:'cid5',
      multipleChoice:false,
      question:"Which bounty hunter did Han Solo kill in 'Episode IV: A New Hope'?",
      options:[
        {
          text:'Greedo',
          answer:true
        },
        {
          text:'Bossk',
          answer:false
        },
        {
          text:'Nien Numb',
          answer:false
        },
        {
          text:'Bobba Fett',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },
        {
          text:'Incorrect option',
          answer:false
        },{
          text:'Incorrect option',
          answer:false
        }

      ]
    },
    'cid6':{
      id:'cid6',
      multipleChoice:false,
      question:"What does the ‘TIE’ in TIE fighter stand for?",
      options:[
        {
          text:'Turbo Induction Encabulator',
          answer:false
        },
        {
          text:'Twin Ion Engine',
          answer:true
        },
        {
          text:'Thermal Inverse Engine',
          answer:false
        },
        {
          text:'Techno Incantho Envulcanator',
          answer:false
        },
      ]
    },
  },
  scores:{

  }
};