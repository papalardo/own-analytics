import {constants} from "../constants";
import {createBaseMetadata} from "./createBaseMetadata";

export const createCustomEvent = async (data: any): Promise<void> => {
  await fetch(`${constants.API_URL}/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...createBaseMetadata(),
      ...data,
    })
  })
}