import { ReducerProps } from "../context/UserContext/IUserContext.types";

export function asyncReducer(state: any, action: ReducerProps) {
  switch (action.type) {
    case "pending": {
      return { status: "pending", data: null, error: null };
    }
    case "resolved": {
      return { status: "resolved", data: action.payload, error: null };
    }
    case "rejected": {
      return { status: "rejected", data: null, error: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
