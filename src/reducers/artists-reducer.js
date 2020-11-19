const initialState = {
  currentArtist: null,
  status: "idle",
  error: null,
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_DATA": {
      return {
        ...state,
        status: "loading",
      };
    }

    case "RECEIVE_DATA": {
      return {
        ...state,
        status: "idle",
        currentArtist: {
          profile: {
            ...action.data,
          },
        },
      };
    }

    case "RECEIVE_DATA_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
