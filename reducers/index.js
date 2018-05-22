import {IMPORT_DATA} from '../actions/'

function importInitialData(state = {},action){
  switch (action.type){
    case IMPORT_DATA:
      return {
        ...state,
        ...action.data
      }

  }
}

export default importInitialData;