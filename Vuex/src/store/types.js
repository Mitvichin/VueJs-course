const counterPrefix = "counter/";
const sharedPrefix = "shared/";

// GETTERS
export const DOUBLE_COUNTER = `${counterPrefix}DOUBLE_COUNTER`;
export const CLICK_COUNTER = `${counterPrefix}CLICK_COUNTER`;
export const VALUE = `${counterPrefix}VALUE`;

// MUTATIONS
export const MUTATE_INCREMENT_COUNTER = `${counterPrefix}MUTATE_INCREMENT_COUNTER`;
export const MUTATE_DECREMENT_COUNTER = `${counterPrefix}MUTATE_DECREMENT_COUNTER`;
export const MUTATE_UPDATE_VALUE = `${sharedPrefix}MUTATE_UPDATE_VALUE`;

//ACTIONS
export const COUNTER_INCREMENT_ASYNC = `${counterPrefix}COUNTER_INCREMENT_ASYNC`;
export const COUNTER_DECREMENT_ASYNC = `${counterPrefix}COUNTER_DECREMENT_ASYNC`;
export const COUNTER_INCREMENT = `${counterPrefix}COUNTER_INCREMENT`;
export const COUNTER_DECREMENT = `${counterPrefix}COUNTER_DECREMENT`;
export const UPDATE_VALUE = `${sharedPrefix}UPDATE_VALUE`;
